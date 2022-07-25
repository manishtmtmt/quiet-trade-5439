import React from "react";
import { Route, Routes } from "react-router-dom";
import Searchbar from "../Components/Searchbar";
import Homepage from "./Homepage";
import HotelDetail from "./HotelDetail";

import RoomInfo from "../Components/RoomInfo";
import Login from "./Login";
import SignUp from "./SignUp";

import HotelList from "../Components/HotelList";
import PaymentPage from "./PaymentPage";
import { ResortsPage } from "./ResortsPage";
import { Navbar } from "../Components/Navbar";
import { RequiredAuth } from "../Redux/AuthReducer/RequiredAuth";
import OTP from "../Components/Payment/OTP";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/Hoteldetail" element={<HotelDetail />} />
        <Route path="/Hoteldetail/:id" element={<RoomInfo />} />
        <Route
          path="/payment"
          element={
            <RequiredAuth>
              <PaymentPage />
            </RequiredAuth>
          }
        />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/bestresorts" element={<ResortsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
