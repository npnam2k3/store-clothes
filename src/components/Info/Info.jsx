import Layout from '@components/Layout/Layout'
import React from 'react'
import styles from './style.module.scss'
import { dataInfo } from '@components/Info/constant'
import InfoCard from '@components/Info/InfoCard/InfoCard'

const Info = () => {
    const {container} = styles
  return (
      <Layout>
        <div className={container}>
            {dataInfo.map((item, index)=>{
                return <InfoCard titleContent={item.title} descContent={item.desc} src={item.src} key={index} />
            })}
        </div>
      </Layout>
  )
}

export default Info
