import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Searchbar from '../Components/Searchbar'
import Homepage from './Homepage'
import HotelDetail from './HotelDetail'

import HotelList from '../Components/HotelList'
import PaymentPage from './PaymentPage'
import RoomInfo from '../Components/RoomInfo'


const MainRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<Homepage/>} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/Hoteldetail" element={<HotelDetail />} />
        <Route path="/Hoteldetail/:id" element={<RoomInfo />} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/payment" element={<PaymentPage />} />

    </Routes>
  )
}

export default MainRoutes