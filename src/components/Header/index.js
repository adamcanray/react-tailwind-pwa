import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../context/ThemeContext'
// import {ColorVariantsList} from '../../theme/Theme'
import { SunIcon, MoonIcon, MenuIcon, AdjusmentsIcon } from '../../assets/icons'
import { SidebarContext } from '../../context/SidebarContext'

export default function Header() {
  const { 
    theme, toggleTheme,
  } = useContext(ThemeContext)
  const { 
    toggleSidebar,
  } = useContext(SidebarContext)

  // function themeListRenderer() {
  //   return ColorVariantsList.map((t, k) => 
  //       <button key={k} data-theme-color-variants={t} className={`rounded-full focus:outline-none mx-1 bg-${t}-500${themeColorVariants === t ? ' is-active' : ''}${themeColorVariants===t?' h-8 w-8 shadow-lg':' h-5 w-5 shadow-md'}`} onClick={changeThemeColorVariants}></button>
  //   )
  // }

  // useEffect(()=>{
  //   console.log(isSidebarOpen)
  //   console.log(toggleSidebar)
  //   console.log(closeSidebar)
  // })


  return (
    <header>
      <div className="bg-white dark:bg-gray-800 p-4 ">
        <div className="flex justify-between items-center text-4xl font-bold tracking-wider text-center">
          <div>
            <button className="block lg:hidde text-gray-700 dark:text-gray-100" onClick={toggleSidebar}>
              <MenuIcon/>
            </button>
          </div>
          <div>
            <button className="mr-4 text-gray-500 dark:text-gray-400 focus:outline-none">
              <AdjusmentsIcon/>
            </button>
            <button aria-hidden="true" className="relative focus:outline-none" onClick={toggleTheme}>
              <div className="w-12 h-6 transition bg-gray-100 rounded-full dark:bg-gray-700"></div>
              <div className={classNames(
                "absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-150 text-gray-700 dark:text-gray-100 transform",
                {
                  'translate-x-6': theme==='dark',
                  'translate-x-0': theme==='light',
                }
              )}>
                {theme==='dark'&&<SunIcon className="w-4 h-4"/>}
                {theme==='light'&&<MoonIcon className="w-4 h-4"/>}
              </div>
            </button>
            {/* <div className="flex items-center justify-center mt-3 bg-white dark:bg-gray-800 p-4 rounded-md">
              {themeListRenderer()}
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}
