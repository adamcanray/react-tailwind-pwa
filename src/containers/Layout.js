import React, { Suspense, lazy } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Main from './Main'
import Sidebar from '../components/Sidebar'
import ThemedSuspense from '../components/ThemedSuspense'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Masonry = lazy(() => import('../pages/Masonry'))
const Cards = lazy(() => import('../pages/Cards'))

export default function Layout() {
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
                path={`/app/cards`}
                render={(props) => <Cards {...props} />}
              />
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
