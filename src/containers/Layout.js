import React, { Suspense } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import Main from './Main'
import { SunIcon, MoonIcon } from '../assets/icons'
import classNames from 'classnames'
import Sidebar from '../components/Sidebar'
import ThemedSuspense from '../components/ThemedSuspense'
import Header from '../components/Header'
import Masonry from '../pages/Masonry'
import Footer from '../components/Footer'

export default function Layout() {
  const { 
    theme, toggleTheme,
  } = React.useContext(ThemeContext)
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex flex-col flex-1">
      <Header/>
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {/* {routes.map((route, i) => {
                return route.role && (
                  route.component
                  &&
                  aksesMenuStore.aksesMenu.indexOf(route.role.name) > -1 
                  ? (
                    <Route
                      key={i}
                      exact={true}
                      path={`/app${route.path}`}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null
                )
              })} */}
              <Route
                exact={true}
                path={`/app/masonry`}
                render={(props) => <Masonry {...props} />}
              />
              <Redirect exact from="/app" to="/app/dashboard" />
              {/* <Route component={Page404} /> */}
            </Switch>
          </Suspense>
        </Main>
        <Footer/>
      </div>
    </div>
  )
}
