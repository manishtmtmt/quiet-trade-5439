import React from "react";
import { Box, Container, Flex, Text, Image, Input,  } from "@chakra-ui/react";
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

import Searchbar from "../Components/Searchbar";


const HotelDetail = () => {
  const dispatch = useDispatch();
  const { data,loading } = useSelector((state) => state.AppReducer);

  // console.log(data);

  useEffect(() => {
    if (data.length == 0) {
      dispatch(getDataApi());
    }
  }, [data.length, dispatch]);

  if(loading){
    return <Spinner2 />;
    
  }

  return (
    <Container maxW="1300px">
      <Searchbar />
      <Flex padding="4" bg="whiteAlpha.900" color="black">
        <Box bg="whiteAlpha.900">
          <ArrowBackIcon color="blue.300" bg="whiteAlpha.900" w={8} />
        </Box>
        <Text bg="whiteAlpha.900" color="blue.300">
          {" "}
          See all properties
        </Text>
      </Flex>
      <ImagesSec1 imgdata={data[0]?.images} />
      <Innavbr />
      <Box id="overview">
        <Overview {...data[0]} />
      </Box>
      <Text fontSize={"4xl"} fontWeight="bold">
        Choose your room
      </Text>
      <Availability />
      <Box id="rooms">
        <RoomCard Rmd={data[0]?.roomTypes} />
      </Box>
      <Box id="location">
        <Location data={data[0]?.address} />
        <AboutProperty />
      </Box>

    </Container>
  );
};

export default HotelDetail;
