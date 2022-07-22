import {
  Box,
  Button,
  Flex,
  Hide,
  Spacer,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import React from "react";


const Innavbr = () => {
  return (
    <Flex
      justify="space-between"
      borderBottom="1px solid grey"
     
      pos={"sticky"}
      top="0"
      bg="whiteAlpha.900"
     
    >
      <Flex justify={"space-around"}  bg="whiteAlpha.900">
        <Tabs  bg="whiteAlpha.900">
          <TabList bg="whiteAlpha.900">
            <Tab ml="4" p="2" cursor={"pointer"} borderBottom="2px solid blue">
            <a href="#overview" >Overview</a>
            </Tab>

            <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid black">
            <a href="#rooms" >Rooms</a>
            </Tab>

            <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid blue">
            <a href="#location" >Location</a>
            </Tab>
            <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid blue">
              Amenities
            </Tab>
            <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid blue">
              Policies
            </Tab>
            <Tab ml="8" p="2" cursor={"pointer"}  bg="whiteAlpha.900" borderBottom="2px solid blue">
              Reviews
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
      <Box>
        {/* <Hide top="0"> */}

        <Button   top="0"  colorScheme="blue">Reserve a room</Button>
        {/* </Hide> */}
      </Box>
    </Flex>
  );
};

export default Innavbr;
