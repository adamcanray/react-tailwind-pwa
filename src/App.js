import React, { lazy, useEffect } from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const Masonry = lazy(() => import('./pages/Masonry'))


function App() {
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
