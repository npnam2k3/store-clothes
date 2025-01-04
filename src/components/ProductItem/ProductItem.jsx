import React from 'react'
import styles from './style.module.scss'
import reloadIcon from '@icons/svgs/reloadIcon1.svg'
import heartIcon from '@icons/svgs/heartIcon2.svg'
import cartIcon from '@icons/svgs/cartIcon1.svg'
import eyeIcon from '@icons/svgs/eyeIcon.svg'

const ProductItem = ({src, prevSrc, title, price}) => {
    const {boxImg, showImgWhileHover, showActionWhileHover, boxIcon, name, priceItem} = styles
  return (
    <div>
      <div className={boxImg}>
        <img src={src} alt="" />
        <img src={prevSrc} alt="" className={showImgWhileHover} />

        <div className={showActionWhileHover}>
            <div className={boxIcon}>
                <img src={cartIcon} alt="" />
            </div>
            <div className={boxIcon}>
                <img src={heartIcon} alt="" />
            </div>
            <div className={boxIcon}>
                <img src={reloadIcon} alt="" />
            </div>
            <div className={boxIcon}>
                <img src={eyeIcon} alt="" />
            </div>
        </div>

      </div>
        <div className={name}>
            {title}
        </div>
        <div className={priceItem}>
            ${price}
        </div>

    </div>
  )
}

export default ProductItem
