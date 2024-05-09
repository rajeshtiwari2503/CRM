"use client"
import Sidenav from '@/app/components/Sidenav'
import React, { useEffect, useState } from 'react'
import http_request from '.././../../http-request'
import ProductList from './ProductList'
const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      getAllProducts()
    }, [])
  
    const getAllProducts = async () => {
      let response = await http_request.get("/getAllProduct")
      let { data } = response;
  
      setProducts(data)
    }
  
    const data = products?.map((item, index) => ({ ...item, i: index + 1}));

    return (
        <>
            <Sidenav>
               
                <ProductList data={data}/>
            </Sidenav>
        </>
    )
}

export default Product