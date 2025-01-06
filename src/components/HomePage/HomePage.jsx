import React, { useEffect, useState } from 'react'

import Header from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import styles from './style.module.scss'
import Info from '@components/Info/Info'
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading'
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct'
import { getProducts } from '@/apis/productSerivce'
import PopularProduct from '@components/PopularProduct/PopularProduct'
import SaleHomePage from '@components/SaleHomePage/SaleHomePage'
import Footer from '@components/Footer/Footer'


const HomePage = () => {
    const {container} = styles
    const [listProduct, setListProduct] = useState([])

    useEffect(()=>{
        const query={
            sortType: 0,
            page: 1,
            limit: 10
        }
        getProducts(query).then(
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
            <SaleHomePage/>
            <Footer/>
        </div>
    </div>
  )
}

export default HomePage
