import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HotelList from '../Components/HotelList'
import HotelDetail from './HotelDetail'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/hotels" element={<HotelList />} />
        <Route path='/hotel' element={<HotelDetail />} />
    </Routes>
  )
}

export default MainRoutes