import React, { useState } from "react";
import { Box, Container, Flex, Text, Image, Input } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { getDataApi } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import ImagesSec1 from "../Components/ImagesSec1";
import Innavbr from "../Components/Innavbr";
import Overview from "../Components/Overview";

import Availability from "../Components/Availability";
import RoomCard from "../Components/RoomCard";
import Location from "../Components/Location";
import Spinner2 from "../Components/Spinner";
import AboutProperty from "../Components/AboutProperty";


import Amenities from "../Components/Amenities";
import Policies from "../Components/Policies";
import { LoadData } from "../Redux/AppReducer/LocalStorage";
import { useLocation, useNavigate } from "react-router-dom";

const HotelDetail = () => {
  // const dispatch = useDispatch();
  const [loading,setLoading] = useState(true)
  // const { loading } = useSelector((state) => state.AppReducer);
  let data = LoadData("cardData")
  // const location = useLocation()
  // console.log(location.state.pathname);
  const navigate = useNavigate()
  
  // let {pathname,search} = location.state
  // console.log(pathname,search)
const handleBack = () =>{
  // if(search){

  //   navigate(`${pathname}${search}`)
  // }
  // else{
    navigate("/hotels")
  // }
}
  useEffect(() => {
    // if (data.length == 0) {
    //   dispatch(getDataApi());
    // }
    setTimeout(() => {
      setLoading(false)
    }, 1000);

  }, []);

  if (loading) {
    return <Spinner2 />;
  }

  return (
    <Container maxW="1300px">
      {/* <Searchbar /> */}
      <Flex padding="4" bg="whiteAlpha.900" color="black">
        <Box bg="whiteAlpha.900">
          <ArrowBackIcon color="blue.300" bg="whiteAlpha.900" w={8} onClick={handleBack}/>
        </Box>
        <Text bg="whiteAlpha.900" color="blue.300">
          {" "}
          See all properties
        </Text>
      </Flex>
      <ImagesSec1 imgdata={data?.images} />
      <Innavbr />
      <Box id="overview">
        <Overview {...data} />
      </Box>
      <Text fontSize={"4xl"} fontWeight="bold">
        Choose your room
      </Text>
      <Availability avl={data?.roomTypes} />
      <Box id="rooms">
        <RoomCard Rmd={data?.roomTypes} />
      </Box>
      <Box id="location">
        <Location data={data?.address} />
        <AboutProperty data={data?.address} />
      </Box>
      <Box id="amenities">
        <Amenities />
      </Box>
      <Box id="policies">
        <Policies />
      </Box>
    </Container>
  );
};

export default HotelDetail;
