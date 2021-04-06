import React from 'react'
import classNames from 'classnames'

export default function CardWrapper({
  className,
  children
}) {
  return (
    <div className={classNames(
      className,
    )}>
      {children}
    </div>
  )
}
