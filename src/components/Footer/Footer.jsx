import React from 'react'
import styles from './style.module.scss'
import { dataMenu } from '@components/Footer/constant'

const Footer = () => {
  const {container, boxNav, checkoutBox, copyright, boxItem} = styles
  return (
    <div className={container}>
      <div>
        <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png" alt="" width={160} height={55} />
      </div>

      <div className={boxNav}>
        {dataMenu.map((item, index)=>{
          return <div className={boxItem} key={index}>{item.content}</div>
        })}
      </div>

      <div className={checkoutBox}>
        <p>Guaranteed safe checkout</p>
        <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" alt="" />
      </div>

      <p className={copyright}>Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.</p>
    </div>
  )
}

export default Footer
