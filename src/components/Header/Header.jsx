import BoxIcon from '@components/Header/BoxIcon/BoxIcon'
import React, { useEffect, useState } from 'react'
import {dataBoxIcon, dataMenu} from './constant'
import styles from './style.module.scss'
import Menu from '@components/Header/Menu/Menu'
import Logo from '@icons/images/Logo-retina.png'
import useScrollHandling from '@/hooks/useScrollHandling'
import classNames from 'classnames'

const Header = () => {
  const {containerBoxIcon, containerMenu,containerHeader,containerBox, container, fixedHeader,topHeader} = styles

  const [fixedPosition, setFixedPosition] = useState(false)
  const {scrollPosition} = useScrollHandling()


  useEffect(()=>{
    setFixedPosition(scrollPosition >130)
  }, [scrollPosition])
  return (
    <div className={classNames(container, topHeader, {
      [fixedHeader]: fixedPosition
    })}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.slice(0,3).map((item, index)=>(
              <BoxIcon type={item.type} href={item.href} key={index} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0,3).map((item, index)=>(
              <Menu content={item.content} href={item.href} key={index} />
            ))}
          </div>
        </div>
      <div>
        <img src={Logo} alt="Logo" style={{
          width: '153px',
          height: '53px'
        }} />
      </div>
      <div className={containerBox}>
        <div className={containerMenu}>
          {dataMenu.slice(3,dataMenu.length).map((item, index)=>(
              <Menu content={item.content} href={item.href} key={index} />
            ))}
        </div>
        <div className={containerBoxIcon}>
          {dataBoxIcon.slice(3, dataBoxIcon.length).map((item, index)=>(
            <BoxIcon type={item.type} href={item.href} key={index} />
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header
