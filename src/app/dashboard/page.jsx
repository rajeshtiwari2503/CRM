"use client"
import React from 'react'
import Sidenav from '../components/Sidenav'
import AdminDashboard from './adminDashboard'


const Dashboard = () => {
  return (
    <Sidenav  >
      <>
       <AdminDashboard />
      </>
    </Sidenav>
  )
}

export default Dashboard