import React from 'react'
import Sidenav from '../components/Sidenav'
import BrandList from './brandList'

const Brand = () => {
  return (
   <Sidenav>
    <>
    <div className="mb-2 font-bold text-xl" >Brand</div>
    <BrandList />
    </>
   </Sidenav>
  )
}

export default Brand