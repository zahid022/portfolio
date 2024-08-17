import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/Topbtn'

function HomeLayout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
        <ScrollToTopButton />
    </>
  )
}

export default HomeLayout