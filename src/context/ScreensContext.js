import React, { useState, useMemo, useCallback, useEffect } from 'react'
import tailwindConfig from '../tailwindConfig'
import { useWindowDimensions } from '../hooks'
import { StringReplace } from '../helper/index.helper'

// create context
export const ScreensContext = React.createContext()

export const ScreensProvider = ({ children }) => {
  const { height, width } = useWindowDimensions()
  
  const [currentBreakpoint, setCurrentBreakpoint] = useState('')
  const [screenBreakpoints, setScreenBreakpoints] = useState([])

  useEffect(() => {
    setScreenBreakpoints(Object.keys(tailwindConfig.screens))
  }, [])
  
  useEffect(() => {
    screenBreakpoints.map(e=>{
      if(width>StringReplace(tailwindConfig.screens[e],'px','')){
        // console.log('the dinamic width still grather than screen, the screen is: ', e)
        setCurrentBreakpoint(e)
      }
    })
  })


  const memoizedSidebarSetup = useMemo(
    () => ({
      currentBreakpoint,
    }),
    [currentBreakpoint]
  )

  return <ScreensContext.Provider value={{
    ...memoizedSidebarSetup,
  }}>{children}</ScreensContext.Provider>
}
