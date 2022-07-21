import React from "react";
import { Box, Container, Flex, Text,Image } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { getDataApi } from "../Redux/AppReducer/action";
import {useDispatch, useSelector} from "react-redux"
import ImagesSec1 from "../Components/ImagesSec1";
import Innavbr from "../Components/Innavbr";
import Overview from "../Components/Overview";

const HotelDetail = () => {

    const dispatch = useDispatch();
    const {data} = useSelector((state)=>state.AppReducer);

    console.log(data)

    useEffect(() => {
        if(data.length==0){

            dispatch(getDataApi())
        }
    }, [data.length,dispatch])
    

  return (
    <Container maxW="1300px">
      <Flex padding="4" bg="whiteAlpha.900" color="black">
        <Box bg="whiteAlpha.900">
          <ArrowBackIcon color="blue.300" bg="whiteAlpha.900" w={8} />
        </Box>
        <Text bg="whiteAlpha.900" color="blue.300">
          {" "}
          See all properties
        </Text>
      </Flex>
      <ImagesSec1 imgdata={data[0]?.images}/>
      <Innavbr />
      <Overview {...data[0]} />
    </Container>
  );
};

export default HotelDetail;
