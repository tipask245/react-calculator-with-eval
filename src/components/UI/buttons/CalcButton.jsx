import React from 'react'
import classes from './CalcButton.module.css'

const CalcButton = ({children, ...props}) => {
  return (
    <button {...props} className={[classes.CalcBtn, props.className].join(' ')}>
        {children}
    </button>
  )
}

export default CalcButton