import React, { useEffect, useState } from 'react'

import Header from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import styles from './style.module.scss'
import Info from '@components/Info/Info'
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading'
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct'
import { getProducts } from '@/apis/productSerivce'
import PopularProduct from '@components/PopularProduct/PopularProduct'


const HomePage = () => {
    const {container} = styles
    const [listProduct, setListProduct] = useState([])

    useEffect(()=>{
        getProducts().then(
          res=>{setListProduct(res.contents)
          })
    }, [])
  return (
    <div>
        <div className={container}>
            <Header />
            <Banner/>
            <Info/>
            <AdvanceHeading/>
            <HeadingListProduct data={listProduct.slice(0,2)}/>
            <PopularProduct data={listProduct.slice(2, listProduct.length)}/>
        </div>
    </div>
  )
}

export default HomePage
