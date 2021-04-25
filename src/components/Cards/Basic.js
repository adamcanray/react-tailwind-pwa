import React from 'react'

export default function CardBasic({
  title,
  text,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border w-full">
      <h4 className="text-3xl text-gray-700 dark:text-gray-400 font-semibold">{title}</h4>
      <p className="text-gray-500 dark:text-gray-300 text-lg mt-2">{text}</p>
    </div>
  )
}
