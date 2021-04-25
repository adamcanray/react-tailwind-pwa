import React, { useState, useEffect, useRef, useLayoutEffect, useMemo, useCallback } from 'react'
import {ThemeClassName, ColorVariantsList} from '../theme/Theme'

/**
 * Saves the old theme for future use
 * @param {string} theme - Name of curent theme
 * @return {string} previousTheme
 */
function usePrevious(theme) {
  const ref = useRef()
  useEffect(() => {
    ref.current = theme
  })
  return ref.current
}

/**
 * Gets user preferences from local storage
 * @param {string} name - localStorage name
 * @return {array} getter and setter for user preferred theme
 */
function useStorageTheme(name) {
  const userPreference = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useState(
    // use stored theme fallback to user preference
    localStorage.getItem(name) || userPreference
  )

  // update stored theme
  useEffect(() => {
    localStorage.setItem(name, theme)
  }, [theme, name])
  
  return [theme, setTheme]
}

/**
 * Gets user preferences from local storage
 * @param {string} name - localStorage name
 * @return {array} getter and setter for user preferred theme
 */
function useStorageThemeColorVariants(name) {
  // set a default colorVariants when colorVariants in localStorage is null or not includes in ColorVariantsList Array
  const colorVariants = ColorVariantsList.includes(localStorage.getItem(name)) ? localStorage.getItem(name) : ColorVariantsList[0]

  const [ themeColorVariants, setThemeColorVariants ] = useState(colorVariants)
  
  // update stored themeColorVariants
  useEffect(() => {
    localStorage.setItem(name, themeColorVariants)
  }, [themeColorVariants, name])
  
  return [themeColorVariants, setThemeColorVariants]
}

// create context
export const ThemeContext = React.createContext()

// create context provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useStorageTheme('theme')
  const [themeColorVariants, setThemeColorVariants] = useStorageThemeColorVariants('theme-color-variants')

  // update root element class on theme change
  const oldTheme = usePrevious(theme)
  useLayoutEffect(() => {
    document.documentElement.classList.remove(`${oldTheme}`)
    document.documentElement.classList.add(`${theme}`)
  }, [theme, oldTheme])

  const toggleTheme = useCallback(() => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }, [theme, setTheme])

  const changeThemeColorVariants = useCallback((e) => {
    const { currentTarget } = e
    const selectedThemeColorVariants = currentTarget.getAttribute('data-theme-color-variants')
    setThemeColorVariants(selectedThemeColorVariants)
  }, [setThemeColorVariants])
  
  const memoizedTheme = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
    )
    const memoizedThemeColorVariants = useMemo(
    () => ({
      themeColorVariants,
      changeThemeColorVariants,
    }),
    [themeColorVariants, changeThemeColorVariants],
  )
  const memoizedThemeClassName = useMemo(
    () => ({
      themeClassName: ThemeClassName({theme, themeColorVariants})
    }),
    [theme, themeColorVariants],
  )

  return <ThemeContext.Provider value={{
    ...memoizedTheme,
    ...memoizedThemeColorVariants,
    ...memoizedThemeClassName,
  }}>{children}</ThemeContext.Provider>
}
