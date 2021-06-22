import React, { lazy } from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))


function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/app" component={Layout} />
        <Redirect exact from="/" to="/app" />
      </Switch>
    </>
  )
}

export default App
