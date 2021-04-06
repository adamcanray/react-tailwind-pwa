/*
* Note:
* ~ React.CloneElement reference: https://stackoverflow.com/a/52904733/11587161
*/
import React from 'react'
import classNames from 'classnames'

export default function MasonryContainer({
  className,
  columnCount,
  columnGap,
  children
}) {
  const childrenClassNameDefault = classNames(
    'masonry-container-grid-base-item',
  )
  const Children = () => {
    if(!children) return null
    if(Array.isArray(children)) children = [].concat.apply([], children) // flatten when children is array
    return Array.isArray(children)?
      children.map((child, index) => {
        return React.cloneElement(child, {
          key: index,
          className: `${child.props.className} ${childrenClassNameDefault}`
        });
      })
    : (
      React.cloneElement(children, {
        className: `${childrenClassNameDefault}`
      })
    )
  }
  return (
    <div className={classNames(
      'masonry-container-grid-base',
      className,
    )}>
      <Children/>
    </div>
  )
}
