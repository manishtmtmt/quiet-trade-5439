import React from 'react'
import { Navbar } from '../Components/Navbar'
import { LandingPage } from './LandingPage'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
    <div style={{background: "#f0f3f5"}}>
      <LandingPage/>
    </div>
  )
}

export default Homepage