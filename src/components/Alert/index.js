import React from 'react'
import classNames from 'classnames'

export default function Alert({
  text,
  type,
}) {
  return (
    <div
      className={classNames(
        'px-6 py-3 rounded-lg shadow-sm w-full',
        {
          'bg-white dark:bg-gray-800': !type||type==='jicama',
          'bg-orange-500': type==='carrot',
          'bg-yellow-500': type==='banana',
          'bg-red-500': type==='cherry',
          'bg-green-500': type==='cucumber',
        }
      )}
    >
      <p className={classNames(
        'text-xl',
        {
          'text-gray-700 dark:text-gray-400': !type||type==='jicama',
          'text-white': type==='carrot'||type==='banana'||type==='cherry'||type==='cucumber'||type==='mangosteen',
        }
      )}>{text}</p>
    </div>
  )
}
