import Layout from '@components/Layout/Layout'
import React from 'react'
import styles from './style.module.scss'

const AdvanceHeading = () => {
    const {container, headline,containerMiddleBox,des,title} = styles
  return (
    <Layout>
        <div className={container}>
            <div className={headline}></div>
            <div className={containerMiddleBox}>
                <p className={des}>don't miss super offers</p>
                <p className={title}>Our best products</p>
            </div>
            <div className={headline}></div>
        </div>
    </Layout>
  )
}

export default AdvanceHeading
