import React from 'react'
import styles from '../style.module.scss'

const Menu = ({content, href, setIsOpen}) => {
    const {menu} = styles
  return (
    <div className={menu} onClick={()=>setIsOpen(true)}>
      {content}
    </div>
  )
}

export default Menu
