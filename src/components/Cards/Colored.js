import classNames from 'classnames'
import React from 'react'
import { sample } from 'lodash'

export default function CardColored({
  title,
  text,
  type,
  typeRandom,
}) {
  /** 
   * Penamaan variable mengambil tema sayuran dan  buah-buahan
  */
 const colorTypes = [
   'jicama',
   'carrot',
   'banana',
   'cherry',
   'cucumber',
 ]
 /**
  * Override the `type` props with random element from `colorTypes`
  */
  if(typeRandom){
    type = sample(colorTypes)
  }
  return (
    <div className={classNames(
      'p-6 sm:rounded-lg shadow-sm border w-full',
      {
        'bg-white dark:bg-gray-800': !type||type==='jicama',
        'bg-orange-500': type==='carrot',
        'bg-yellow-500': type==='banana',
        'bg-red-500': type==='cherry',
        'bg-green-500': type==='cucumber',
      }
    )}>
      <h4 className={classNames(
        'text-3xl font-semibold',
        {
          'text-gray-700 dark:text-gray-400': !type||type==='jicama',
          'text-white': type==='carrot'||type==='banana'||type==='cherry'||type==='cucumber'||type==='mangosteen',
        }
      )}>{title}</h4>
      <p className={classNames(
        'text-lg mt-2',
        {
          'text-gray-500 dark:text-gray-300': !type||type==='jicama',
          'text-white': type==='carrot'||type==='banana'||type==='cherry'||type==='cucumber'||type==='mangosteen',
        }
      )}>{text}</p>
    </div>
  )
}
