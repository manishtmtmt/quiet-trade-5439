import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HotelList from '../Components/HotelList'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/hotels" element={<HotelList />} />
    </Routes>
  )
}

export default MainRoutes