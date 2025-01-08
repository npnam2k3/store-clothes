import React, { useContext } from 'react'
import styles from './style.module.scss'
import { SideBarContext } from '@/context/SideBarProvider'
import classNames from 'classnames'

import { TfiClose } from "react-icons/tfi";
import Login from '@components/ContentSideBar/Login/Login';

const SideBar = () => {
    const {container, sideBar, overlay, sliderSideBar, boxIcon} = styles
    const {isOpen, setIsOpen} = useContext(SideBarContext)
    const handleToggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div className={container}>
      <div className={classNames({
        [overlay]: isOpen
      })} onClick={handleToggle}></div>
      <div className={classNames(sideBar,{
        [sliderSideBar]: isOpen
      })}>
            {isOpen && <div className={boxIcon} onClick={handleToggle}>
                <TfiClose/>
            </div>}
            <Login/>
        </div>
    </div>
  )
}

export default SideBar
