import React from 'react'
import {  Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const Layout = () => {
  const token = localStorage.getItem('token')
  return (
    <>
    {
      token? 
      <div className="content">
        <Header/>
        <Outlet/>
      </div>:
      <Navigate to='/login'/>
    }
    </>
  )
}

export default Layout