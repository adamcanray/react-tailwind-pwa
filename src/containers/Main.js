import React from 'react'

export default function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto bg-gray-100 dark:bg-gray-900">
      <div className="container grid px-6 mx-auto">{children}</div>
    </main>
  )
}