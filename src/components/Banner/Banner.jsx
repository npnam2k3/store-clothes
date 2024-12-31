import React from 'react'
import styles from './style.module.scss'
import Button from '@components/Button/Button'

const Banner = () => {
  const {container, content, title, desc} = styles
  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>XStore Marseille04 Demo</h1>
        <div className={desc}>Make yours celebrations even more special this years with beautiful.</div>
        <Button content={"Go to shop"}/>
      </div>
    </div>
  )
}

export default Banner
