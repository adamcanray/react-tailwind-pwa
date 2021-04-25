import React, { lazy, useEffect } from 'react'
import {
  Switch,
  Route,
  Redirect,
  // useLocation
} from 'react-router-dom'


const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const Masonry = lazy(() => import('./pages/Masonry'))

function App() {
  // const location = useLocation()
  
  // useEffect(() => {
  //   if(location.pathname.toLowerCase().includes('app')){
  //     console.log(location)
  //     console.log('di app')
  //     console.log("User-agent header sent: " + navigator.userAgent)
  //   }
  //   else if(location.pathname.toLowerCase().includes('login')){
  //     console.log('masuk login')
  //     console.log("User-agent header sent: " + navigator.userAgent)
  //   }
  // })

  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/masonry" component={Masonry} />
        <Route path="/app" component={Layout} />
        <Redirect exact from="/" to="/app" />
      </Switch>
    </>
  );
}

export default App
