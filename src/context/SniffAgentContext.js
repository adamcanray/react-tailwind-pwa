import React, { useState, useMemo, useCallback, useEffect } from 'react'
import tailwindConfig from '../tailwindConfig'
import { useWindowDimensions } from '../hooks'
import { StringReplace } from '../helper/index.helper'
import {
  useLocation
} from 'react-router-dom'

// create context
export const SniffAgentContext = React.createContext()

export const SniffAgentProvider = ({ children }) => {
  /**
   * Context/Hooks/Etc
   */
  const location = useLocation()
  const [form, setForm] = useState({
    agent_info: navigator.userAgent,
    agent_location: '',
    agent_location_permission: '',
  })

  useEffect(()=>{
    if(process.env.REACT_APP_USE_SNIFF_AGENT_CONTEXT_FUNCTIONALITY==='1'){

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          setForm(prevState=>{
            return {
              ...prevState,
              agent_location: `latitude:${position.coords.latitude};longitude:${position.coords.longitude};`
            }
          })
        });
      }else{
        setForm(prevState=>{
          return {
            ...prevState,
            agent_location: `latitude:Geolocation is not supported by this browser.;longitude:Geolocation is not supported by this browser.;`
          }
        })
      }
      navigator.permissions.query({name:'geolocation'}).then(function(result) {
        // Will return ['granted', 'prompt', 'denied']
        setForm(prevState=>{
          return {
            ...prevState,
            agent_location_permission: `${result.state}`
          }
        })
      });
    }
  }, [location])

  /**
   * HTTP Request to `/api/index.js`
   */
  useEffect(() => {
    if(process.env.REACT_APP_USE_SNIFF_AGENT_CONTEXT_FUNCTIONALITY==='1'){
      if(form&&form.agent_location_permission){
        const formBody = Object.keys(form).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(form[key])).join('&')
        const postRequestToOctopusWaterfallManagement = new Request('https://octopus-waterfall-management.herokuapp.com/api/agents', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBody
        })
    
        if(location.pathname.toLowerCase().includes('app')){
          /** POST to OWMB */
          fetch(postRequestToOctopusWaterfallManagement)
          .then(response => console.log(response))
          .catch(err => {
            console.log(err)
          })
        }
        else if(location.pathname.toLowerCase().includes('login')){
          /** POST to OWMB */
          fetch(postRequestToOctopusWaterfallManagement)
          .then(response => console.log(response))
          .catch(err => {
            console.log(err)
          })
        }
      }
    }
  }, [location, form])

  const memoizedSniffAgenInfo = useMemo(
    () => ({
      default: 'default provider value',
    }),
    []
  )

  return <SniffAgentContext.Provider value={{
    ...memoizedSniffAgenInfo,
  }}>{children}</SniffAgentContext.Provider>
}
