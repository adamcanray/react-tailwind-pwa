import React, { useState, useMemo, useCallback } from 'react'

// create context
export const SidebarContext = React.createContext()

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = useCallback(()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }, [isSidebarOpen])

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  function openSidebar() {
    setIsSidebarOpen(true)
  }

  const memoizedSidebarSetup = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
      openSidebar,
    }),
    [isSidebarOpen, toggleSidebar]
  )

  return <SidebarContext.Provider value={{
    ...memoizedSidebarSetup,
  }}>{children}</SidebarContext.Provider>
}
