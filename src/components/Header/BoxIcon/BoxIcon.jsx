import React from 'react'
import styles from '../style.module.scss'
import fbIcon from '@icons/svgs/fbIcon.svg'
import instaIcon from '@icons/svgs/instaIcon.svg'
import youtubeIcon from '@icons/svgs/youtubeIcon.svg'
import reloadIcon from '@icons/svgs/reloadIcon.svg'
import heartIcon from '@icons/svgs/heartIcon.svg'
import cartIcon from '@icons/svgs/cartIcon.svg'

const BoxIcon = ({type, href}) => {
    const {boxIcon} = styles
    const handleRenderIcon = (type)=>{
        switch (type){
            case 'fb':
                return <img src={fbIcon} alt={type} />
            case 'ins':
                return <img src={instaIcon} alt={type} />
            case 'ytb':
                return <img src={youtubeIcon} alt={type} />
            case 'reload':
                return <img src={reloadIcon} alt={type} />
            case 'heart':
                return <img src={heartIcon} alt={type} />
            case 'cart':
                return <img src={cartIcon} alt={type} />
            default:
                return ''
        }
    }
  return (
    <div className={boxIcon}>
      {handleRenderIcon(type)}
    </div>
  )
}

export default BoxIcon
