import {
  Box,
  Button,
  Flex,
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
      bg="whiteAlpha.900"
     
    >
      <Flex justify={"space-around"}>
        <Tabs>
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
            <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid blue">
              Reviews
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
      <Box>
        <Button colorScheme="blue">Reserve a room</Button>
      </Box>
    </Flex>
  );
};

export default Innavbr;
