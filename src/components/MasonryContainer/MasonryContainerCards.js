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
    'page-break-inside-avoid inline-flex',
    {
      'mb-8': !columnGap,
      [`mb-${columnGap}`]: columnGap,
    }
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
  const columnCountRule = (count) => {
    if(count<3){
      return 3 // min 3
    }
    else if(count>5){
      return 5 // max 5
    }
    return count
  }
  return (
    <div className={classNames(
        'column-count-1 sm:column-count-2',
      {
        'md:column-count-3': !columnCount,
        [`md:column-count-${columnCountRule(columnCount)}`]: columnCount,
      },
      {
        'column-gap-8': !columnGap,
        [`column-gap-${columnGap}`]: columnGap,
      },
      className,
    )}>
      <Children/>
    </div>
  )
}
