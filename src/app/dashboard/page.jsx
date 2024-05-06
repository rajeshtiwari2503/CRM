"use client"
import React from 'react'
import Sidenav from '../components/Sidenav'
import AdminDashboard from './adminDashboard'
import BrandDashboard from './brandDashboard'


const Dashboard = () => {
  return (
    <Sidenav  >
      <>
       <AdminDashboard />
       {/* <BrandDashboard /> */}
      </>
    </Sidenav>
  )
}

export default Dashboard