import Layout from '@components/Layout/Layout'
import React from 'react'
import styles from './style.module.scss'
import ProductItem from '@components/ProductItem/ProductItem'

const PopularProduct = ({data}) => {
    const {container} = styles
    
  return (
    <>
        <Layout>      
            <div className={container}>
                {data.map(item=>(
                    <ProductItem 
                        key={item._id} 
                        src={item.images[0]} 
                        prevSrc={item.images[1]} 
                        title={item.name} 
                        price={item.price}
                    />
                ))}
                
            </div>
        </Layout>
    </>
  )
}

export default PopularProduct
