"use client"
import Sidenav from '@/app/components/Sidenav'
import React, { useEffect, useState } from 'react'
import CategoryList from './categoryList'
import http_request from '.././../../../http-request'
const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      getAllCategories()
    }, [])
  
    const getAllCategories = async () => {
      let response = await http_request.get("/getAllProductCategory")
      let { data } = response;
  
      setCategories(data)
    }
  
    const data = categories?.map((item, index) => ({ ...item, i: index + 1}));

    return (
        <>
            <Sidenav>
               
                <CategoryList data={data}/>
            </Sidenav>
        </>
    )
}

export default Category