import React from 'react'
import styles from './style.module.scss'
import Button from '@components/Button/Button'

const CountdownBanner = () => {
    const {container, title, boxBtn} = styles
  return (
    <div className={container}>
      <p className={title}>The classics make a comeback</p>
      <div className={boxBtn}>
        <Button content={"Buy now"} />
      </div>
    </div>
  )
}

export default CountdownBanner
