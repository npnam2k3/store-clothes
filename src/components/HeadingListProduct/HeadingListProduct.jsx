import Layout from '@components/Layout/Layout'
import React from 'react'
import styles from './style.module.scss'
import CountdownBanner from '@components/CountdownBanner/CountdownBanner'
import ProductItem from '@components/ProductItem/ProductItem'

const HeadingListProduct = ({data}) => {
  const {container, containerItem} = styles
  return (
    <div>
      <Layout>
        <div className={container}>
            <CountdownBanner/>
            <div className={containerItem}>
                {data.map(item=>{
                  return <ProductItem 
                    key={item._id} 
                    src={item.images[0]} 
                    prevSrc={item.images[1]} 
                    title={item.name} 
                    price={item.price}/>
                })}
                
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default HeadingListProduct
