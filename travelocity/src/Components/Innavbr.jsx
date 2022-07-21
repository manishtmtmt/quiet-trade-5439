import { Box, Button, Flex, Spacer, Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Innavbr = () => {
  const [active, setActive] = useState(false);

  const handleSet = (value) => {
    setActive(true);
    SetBorder(value);
  };

  const SetBorder = (value) => {
    if (value == "Overview") {
      //    className=`borderBottom:"3px solid blue"`
    }
  };

  return (
    <Flex justify="space-between" borderBottom="1px solid grey">
      <Flex justify={"space-around"}>
        <Tabs>

        <TabList>
          <Tab
            ml="4"
            p="2"
            cursor={"pointer"}
            borderBottom="2px solid blue"
          >
            Overview
          </Tab>

          <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid black">
            Rooms
          </Tab>

          <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid blue">
            Location
          </Tab>
          <Tab ml="8" p="2" cursor={"pointer"}borderBottom="2px solid blue">
            Amenities
          </Tab>
          <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid blue">
            Policies
          </Tab>
          <Tab
            ml="8"
            p="2"
            cursor={"pointer"}
            borderBottom="2px solid blue"
          >
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
