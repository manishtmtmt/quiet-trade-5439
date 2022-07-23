import React from 'react'
import { Footer } from '../Components/Footer/Footer'
import { Navbar } from '../Components/Navbar'
import { LandingPage } from './LandingPage'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default Homepage