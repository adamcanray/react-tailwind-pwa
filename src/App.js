import React, { lazy, useEffect } from 'react'
import {
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom'

/**
 * setup a HTTP Request
 */
const myHeaders = new Headers()
const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
})

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const Masonry = lazy(() => import('./pages/Masonry'))



function App() {

  const location = useLocation()

  useEffect(() => {
    if(location.pathname.toLowerCase().includes('app')){
      fetch(myRequest, { 
        userAgent: navigator.userAgent,
        location: location.pathname
      })
      .then(response => console.log(response))
      .then(err => {
        console.log(err)
      })
    }
    else if(location.pathname.toLowerCase().includes('login')){
      fetch(myRequest, { 
        userAgent: navigator.userAgent,
        location: location.pathname
      })
      .then(response => console.log(response))
      .then(err => {
        console.log(err)
      })
    }
  }, [location])

  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/masonry" component={Masonry} />
        <Route path="/app" component={Layout} />
        <Redirect exact from="/" to="/app" />
      </Switch>
    </>
  )
}

export default App
