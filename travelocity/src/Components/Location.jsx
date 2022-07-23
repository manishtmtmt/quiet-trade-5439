import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Location = ({ data }) => {
  // console.log(data);
  return (
    <Box borderRadius="xl" bg="whiteAlpha.900" p="2">
      <Flex bg="whiteAlpha.900">
        <Box width="100%" bg="whiteAlpha.900">
          <Text m="2" fontSize="xl" bg="whiteAlpha.900" fontWeight="bold">
            About this Area
          </Text>
          <Text m="2" fontSize="xl" bg="whiteAlpha.900" fontWeight="bold">
            {data?.line1}
          </Text>
          <Text
            noOfLines={[1, 2, 10]}
            bg="whiteAlpha.900"
            fontSize={"sm"}
            m="4"
            width="50%"
          >
            {`Located in ${data?.line1} neighborhoof\d, The ${data?.line1} is connected to shopping center. And 
            Travelers want to shop may want to visit ${data?.city} Mall. Looking to enjoy an evnet or a game while in town? See what's going on at ${data?.city} city Park and Grounds.`}
          </Text>
        </Box>
        <Box width="100%" bg="whiteAlpha.900">
          <Box bg="whiteAlpha.900"></Box>
          <Box  bg="whiteAlpha.900">
            <Flex bg="whiteAlpha.900">
              <PlaceIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                What's nearby
              </Text>
            </Flex>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
              {data?.city} city Mall - 15 min walk
            </Text>
            <Text bg="whiteAlpha.900" fontSize={"sm"} m="2">
              Palladium Mall - 10-15 min walk
            </Text>
            <Text bg="whiteAlpha.900" fontSize={"sm"} m="2">
              {data?.city} city hospital - 15-25 min walk
            </Text>
            <Text bg="whiteAlpha.900" fontSize={"sm"} m="2">
            {data?.city} city playground - 10 min walk
            </Text>
          </Box>
          <Box  bg="whiteAlpha.900">
          <Flex bg="whiteAlpha.900">
              <DirectionsCarIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Getting around
              </Text>
            </Flex>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
              {data?.city} city Station 20 min drive
            </Text>
            <Text bg="whiteAlpha.900" fontSize={"sm"} m="2">
            {data?.city} Airport- 30-40 min drive
            </Text>
            <Text bg="whiteAlpha.900" fontSize={"sm"} m="2">
              {data?.city} city  - 15 min drive
            </Text>
          
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Location;
