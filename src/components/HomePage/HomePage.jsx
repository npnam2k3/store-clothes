import React from 'react'

import Header from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import styles from './style.module.scss'
import Info from '@components/Info/Info'


const HomePage = () => {
    const {container} = styles
  return (
    <div>
        <div className={container}>
            <Header />
            <Banner/>
            <Info/>
        </div>
    </div>
  )
}

export default HomePage
