import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

const Searchbar = () => {
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(2);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/hotel")
  }

  return (
    <Box
      backgroundImage={
        "url('https://forever.travel-assets.com/flex/flexmanager/images/2021/06/25/TVLY_SeizeYourSomeday_lpheroB_1680x945_20210623.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh')"
      }
      backgroundRepeat="no-repeat"
      backgroundPosition={"center"}
      backgroundSize="cover"
      width={"100%"}
      height="350px"
      padding={"40px"}
    >
      <Stack
        width={"80%"}
        m="auto"
        backgroundColor={"white"}
        borderRadius={"15px"}
        p="20px"
        direction={"column"}
        gap="10px"
      >
        <Tabs>
          <TabList justifyContent={"space-between"}>
            <Tab>Stays</Tab>
            <Tab>Flights</Tab>
            <Tab>Cars</Tab>
            <Tab>Packages</Tab>
            <Tab>Things to do</Tab>
            <Tab>Cruises</Tab>
          </TabList>
        </Tabs>
        <Stack w={"100%"}>
          <Flex justifyContent={"space-between"}>
            <Box
              w={"25%"}
              height="60px"
              border="1px solid"
              borderRadius={"10px"}
            >
              <SearchBox />
            </Box>
            <Box
              w={"20%"}
              height="60px"
              border="1px solid"
              borderRadius={"10px"}
            >
              <Flex>
                <Box fontSize="24px" m={"12px"}>
                  <i className="fa-solid fa-calendar-day"></i>
                </Box>
                <Box textAlign={"left"}>
                  <Text>Check-in</Text>
                  <Box mt={"-5px"} ml="-12px">
                    <Input type={"date"} border={"none"} />
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box
              w={"20%"}
              height="60px"
              border="1px solid"
              borderRadius={"10px"}
            >
              <Flex>
                <Box fontSize="24px" m={"12px"}>
                  <i className="fa-solid fa-calendar-day"></i>
                </Box>
                <Box textAlign={"left"}>
                  <Text>Check-out</Text>
                  <Box mt={"-5px"} ml="-12px">
                    <Input type={"date"} border={"none"} />
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box
              w={"25%"}
              height="60px"
              border="1px solid"
              borderRadius={"10px"}
            >
              <Popover>
                <PopoverTrigger>
                  <Flex height={"100%"}>
                    <Box fontSize="24px" m={"12px"}>
                      <i class="fa-solid fa-user"></i>
                    </Box>
                    <Box textAlign={"left"} mt="5px">
                      <Text>Travelers</Text>
                      <Text>
                        {room} {room <= 1 ? "Room" : "Rooms"}, {adult}{" "}
                        {adult <= 1 ? "Traveler" : "Travelers"}
                      </Text>
                    </Box>
                  </Flex>
                </PopoverTrigger>
                <PopoverContent>
                  <Stack direction={"column"} gap="10px" p={"10px"}>
                    <Heading as={"h4"} fontSize="lg">
                      Travelers
                    </Heading>
                    <Text>
                      {room} {room <= 1 ? "Room" : "Rooms"}, {adult}{" "}
                      {adult <= 1 ? "Traveler" : "Travelers"}
                    </Text>
                    <Stack direction={"column"} gap="10px">
                      <Flex justifyContent={"space-between"}>
                        <Box>Room</Box>
                        <Stack direction={"row"} alignItems="center">
                          <Button
                            borderRadius={"50%"}
                            disabled={room === 0}
                            onClick={() => setRoom(room - 1)}
                          >
                            -
                          </Button>
                          <Box>{room}</Box>
                          <Button
                            borderRadius={"50%"}
                            onClick={() => setRoom(room + 1)}
                          >
                            +
                          </Button>
                        </Stack>
                      </Flex>
                      <Flex justifyContent={"space-between"}>
                        <Box>Adults</Box>
                        <Stack direction={"row"} alignItems="center">
                          <Button
                            borderRadius={"50%"}
                            disabled={adult <= 1}
                            onClick={() => setAdult(adult - 1)}
                          >
                            -
                          </Button>
                          <Box>{adult}</Box>
                          <Button
                            borderRadius={"50%"}
                            onClick={() => setAdult(adult + 1)}
                          >
                            +
                          </Button>
                        </Stack>
                      </Flex>
                    </Stack>
                  </Stack>
                </PopoverContent>
              </Popover>
            </Box>
          </Flex>
        </Stack>
        <Box paddingTop={"30px"} textAlign="center">
            <Button colorScheme={"blue"} width="100px" padding="10px 16px" onClick={handleClick}>
              Search
            </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Searchbar;
