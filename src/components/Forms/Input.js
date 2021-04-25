import React from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../context/ThemeContext'

const Checkbox = props => (
  <input
    {...props}
    className={classNames(
      props.className.input.type.checkbox,
      props.className.input.active,
      {
          [props.className.input.disabled]: props.disabled,
      },
    )}
  />
)
const Radio = props => (
  <input
    {...props}
    className={classNames(
      props.className.input.type.radio,
      props.className.input.active,
      {
          [props.className.input.disabled]: props.disabled,
      },
    )}
  />
)

export default function Input(props) {
  
  const { 
    // theme, toggleTheme,
    // themeColorVariants, changeThemeColorVariants,
    themeClassName,
  } = React.useContext(ThemeContext)

  if(props.type==='checkbox'){
    return <Checkbox {...props} className={themeClassName} />
  }
  else if(props.type==='radio'){
    return <Radio {...props} className={themeClassName} />
  }

  return (
    <input
      {...props}
      className={classNames(
        'px-4 py-2 transitio duration-3',
        themeClassName.input.type.base,
        themeClassName.input.active,
        {
          [themeClassName.input.disabled]: props.disabled,
          [themeClassName.input.valid]: props.valid&&props.valid===true,
          [themeClassName.input.invalid]: props.valid&&props.valid===false,
        }
      )}
    />
  )
}
