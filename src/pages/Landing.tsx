import React from 'react'
import NavBar from '../components/NavBar'
import Carousel from '../components/landingPage/Carousel'
import Products from '../components/landingPage/Products'
import Footer from '../components/Footer'

const Landing: React.FC = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <Products />
      <Footer/>
    </>
  )
}

export default Landing