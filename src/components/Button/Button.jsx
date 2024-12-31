import React from 'react'
import styles from './style.module.scss'

const Button = ({content}) => {
    const {btn} = styles
  return (
    <button className={btn}>{content}</button>
  )
}

export default Button
