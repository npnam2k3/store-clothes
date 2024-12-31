import React from 'react'
import styles from '../style.module.scss'

const Menu = ({content, href}) => {
    const {menu} = styles
  return (
    <div className={menu}>
      {content}
    </div>
  )
}

export default Menu
