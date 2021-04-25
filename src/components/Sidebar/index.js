import React, { useContext, useEffect } from 'react'
import classNames from 'classnames'
import { Route, NavLink } from 'react-router-dom'
import { ScreensContext } from '../../context/ScreensContext'
import { ThemeContext } from '../../context/ThemeContext'
import { SidebarContext } from '../../context/SidebarContext'
import { useWindowDimensions } from '../../hooks'
import { PresentationChartBarIcon, CollectionIcon, LoginIcon, ViewGridIcon } from '../../assets/icons'

export default function Sidebar() {
  const { 
    currentBreakpoint
  } = useContext(ScreensContext)
  const { 
    theme, toggleTheme,
    themeColorVariants, changeThemeColorVariants,
  } = useContext(ThemeContext)
  const { 
    isSidebarOpen, toggleSidebar, closeSidebar,
  } = useContext(SidebarContext)

  useEffect(() => {
    if(isSidebarOpen){
      if(currentBreakpoint==='md'||currentBreakpoint==='sm'){
        closeSidebar()
      }
    }
  }, [currentBreakpoint])

  return (
    <div className={classNames(
      'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-semibold',
      {
        'w-72': isSidebarOpen,
        'w-0': !isSidebarOpen,
      }
    )}>
      <div className="flex items-center py-4">
        <img className="w-16" src="https://octopuswaterfall.web.app/img/logo-octopus-1-40px.png" alt="octopuswaterfall-logo"/>
        <p className="text-lg">OWM</p>
      </div>
      <nav className="mt-6">
        <ul className="">
          <li className="relative py-2 px-6">
            <NavLink 
              to={{ pathname: '/app/dashboard' }}
              className="inline-flex text-sm w-full items-center hover:text-gray-800 dark:hover:text-gray-100" 
              activeClassName="text-gray-800 dark:text-gray-100"
            >
              <Route path="/app/dashboard" exact={true}>
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-${themeColorVariants}-600 rounded-tr-l rounded-br-l`}
                  aria-hidden="true"
                ></span>
              </Route>
              <PresentationChartBarIcon className="w-6 h-6"/>
              <span className="ml-4">Dashboard</span>
            </NavLink>
          </li>
          <li className="relative py-2 px-6">
            <NavLink 
              to={{ pathname: '/app/cards' }}
              className="inline-flex text-sm w-full items-center hover:text-gray-800 dark:hover:text-gray-100" 
              activeClassName="text-gray-800 dark:text-gray-100"
            >
              <Route path="/app/cards" exact={true}>
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-${themeColorVariants}-600 rounded-tr-l rounded-br-l`}
                  aria-hidden="true"
                ></span>
              </Route>
              <CollectionIcon className="w-6 h-6"/>
              <span className="ml-4">Cards</span>
            </NavLink>
          </li>
          <li className="relative py-2 px-6">
            <NavLink 
              to={{ pathname: '/app/masonry' }}
              className="inline-flex text-sm w-full items-center hover:text-gray-800 dark:hover:text-gray-100" 
              activeClassName="text-gray-800 dark:text-gray-100"
            >
              <Route path="/app/masonry" exact={true}>
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-${themeColorVariants}-600 rounded-tr-l rounded-br-l`}
                  aria-hidden="true"
                ></span>
              </Route>
              <ViewGridIcon className="w-6 h-6"/>
              <span className="ml-4">Masonry</span>
            </NavLink>
          </li>
          <li className="relative py-2 px-6">
            <NavLink 
              to={{ pathname: '/login' }}
              className="inline-flex text-sm w-full items-center hover:text-gray-800 dark:hover:text-gray-100" 
              activeClassName="text-gray-800 dark:text-gray-100"
            >
              <Route path="/login" exact={true}>
                <span
                  className={`absolute inset-y-0 left-0 w-1 bg-${themeColorVariants}-600 rounded-tr-l rounded-br-l`}
                  aria-hidden="true"
                ></span>
              </Route>
              <LoginIcon className="w-6 h-6"/>
              <span className="ml-4">Login</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div> 
  )
}
