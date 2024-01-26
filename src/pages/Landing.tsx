import React from 'react'
import NavBar from '../components/landingPage/NavBar'
import Carousel from '../components/landingPage/Carousel'
import Products from '../components/landingPage/Products'

const Landing: React.FC = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <Products />
    </>
  )
}

export default Landing