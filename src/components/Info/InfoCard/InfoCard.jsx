import React from 'react'
import styles from '../style.module.scss'
import TruckIcon from "@icons/svgs/truckIcon.svg";

const InfoCard = ({titleContent, descContent, src}) => {
    const {containerCard, containerContent, title, desc} = styles
  return (
    <div className={containerCard}>
      <img width={40} height={41} src={src} alt="" />
      <div className={containerContent}>
        <div className={title}>{titleContent}</div>
        <div className={desc}>{descContent}</div>
      </div>
    </div>
  )
}

export default InfoCard
