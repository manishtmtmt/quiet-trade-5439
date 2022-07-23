import {
  Box,
  Button,
  CloseButton,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";

import GroupIcon from "@mui/icons-material/Group";

import ShowerIcon from "@mui/icons-material/Shower";
import CheckIcon from "@mui/icons-material/Check";

import AccessibleIcon from "@mui/icons-material/Accessible";

import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationCityIcon from "@mui/icons-material/LocationCity";

import FreeBreakfastTwoToneIcon from "@mui/icons-material/FreeBreakfastTwoTone";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { LoadData } from "../Redux/AppReducer/LocalStorage";
import { Link, useLocation, useNavigate } from "react-router-dom";

const RoomInfo = () => {
  const data = LoadData("roomdetail");
  // console.log(data);
  const navigate = useNavigate();
  const [price, setPrice] = useState(data.roomPrice);
  const [add, setAdd] = useState(false);
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(location.state.pathname);
  const handleclose = () => {
    navigate(location.state.pathname);
  };

  const handleChange=(e)=>{
    let {value} = e.target
    setPrice(data.roomPrice + Number(value))
    if(value=="45"){
      setAdd(true)
    }
    else{
      setAdd(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bg="white">
      <Flex borderBottom="1px">
        <CloseButton size="lg" color="blue" onClick={handleclose} />
        <Text mt="2">Room information</Text>
      </Flex>
      <Flex m="auto" justify="center">
        <Flex justify="center" width="90%">
          <Box width="40%" m="4">
            <Text fontSize={"xl"} p="2" fontWeight="bold">
              {data.name}
            </Text>
            <Flex m="2" fontSize="sm">
              <SquareFootIcon style={{ color: "grey" }} />
              <Text ml="2" color="grey">
                484 Sq ft
              </Text>
            </Flex>
            <Flex m="2" fontSize="sm">
              <LocationCityIcon style={{ color: "grey" }} />
              <Text ml="2" color="grey">
                City view
              </Text>
            </Flex>
            <Flex m="2" fontSize="sm">
              <GroupIcon style={{ color: "grey" }} />
              <Text ml="2" color="grey">
                Sleeps 3
              </Text>
            </Flex>
            <Flex m="2" fontSize="sm">
              <LocalHotelIcon style={{ color: "grey" }} />
              <Text ml="2" color="grey">
                1 king Bed
              </Text>
            </Flex>
            <Flex m="2" fontSize="sm">
              <WifiIcon style={{ color: "grey" }} />
              <Text ml="2" color="grey">
                Free Wifi
              </Text>
            </Flex>
            <Flex m="2" fontSize="sm">
              <FreeBreakfastTwoToneIcon style={{ color: "grey" }} />
              <Text ml="2" color="grey">
                Breakfast buffet
              </Text>
            </Flex>
            <Flex m="2" fontSize="sm">
              <LocalParkingIcon style={{ color: "grey" }} />
              <Text ml="2" color="grey">
                Free self parking
              </Text>
            </Flex>
            <Flex ml="2" fontSize="sm">
              <CheckTwoToneIcon style={{ color: "grey" }} />
              <Text ml="2" color="grey">
                Reserve now, pay later
              </Text>
            </Flex>
            <Box width="100%">
              <Text m="2" fontSize="xl" fontWeight="bold">
                Room amenities
              </Text>
            </Box>

            <Box m="2">
              <Flex>
                <AccessibleIcon style={{ margin: "2px" }} />
                <Text ml="2" fontSize="lg" fontWeight="bold">
                  Accessibility
                </Text>
              </Flex>
              <Box m="2" mt="0" p="2" pt="0">
                <Text fontSize="sm" m="2">
                  Accessible bathtub
                </Text>
                <Text fontSize="sm" m="2">
                  Closed-captioned TV
                </Text>
                <Text fontSize="sm" m="2">
                  Doorbell and phone notification
                </Text>
                <Text fontSize="sm" m="2">
                  Grab bar near toilet
                </Text>
                <Text fontSize="sm" m="2">
                  Height-adjustable showerhead
                </Text>
                <Text fontSize="sm" m="2">
                  Lever door handles
                </Text>

                <Text fontSize="sm" m="2">
                  Low-height outlets in bathroom
                </Text>
                <Text fontSize="sm" m="2">
                  Visual fire alarm
                </Text>
                <Text fontSize="sm" m="2">
                  Low-height door lock
                </Text>
              </Box>
            </Box>

            <Box m="2">
              <Flex>
                <ShowerIcon style={{ margin: "2px" }} />
                <Text ml="2" fontSize="lg" fontWeight="bold">
                  Bathroom
                </Text>
              </Flex>
              <Box m="2" p="2" pt="0">
                <Text fontSize="sm" m="2">
                  Deep soaking bathtub
                </Text>
                <Text fontSize="sm" m="2">
                  Designer toiletries
                </Text>
                <Text fontSize="sm" m="2">
                  Hair dryer
                </Text>
                <Text fontSize="sm" m="2">
                  Private bathroom
                </Text>
                <Text fontSize="sm" m="2">
                  Rainfall showerhead
                </Text>
                <Text fontSize="sm" m="2">
                  Separate bathtub and shower
                </Text>
                <Text fontSize="sm" m="2">
                  Towels
                </Text>
              </Box>
            </Box>

            <Box m="2">
              <Flex>
                <LocalHotelIcon style={{ margin: "2px" }} />
                <Text ml="2" fontSize="lg" fontWeight="bold">
                  Bedroom
                </Text>
              </Flex>
              <Box m="2" p="2" pt="0">
                <Text fontSize="sm" m="2">
                  Air conditioning
                </Text>
                <Text fontSize="sm" m="2">
                  Bed sheets
                </Text>
                <Text fontSize="sm" m="2">
                  Blackout drapes/curtains
                </Text>
                <Text fontSize="sm" m="2">
                  Egyptian cotton linens
                </Text>
                <Text fontSize="sm" m="2">
                  Free cribs/infant beds
                </Text>
                <Text fontSize="sm" m="2">
                  Heating
                </Text>
                <Text fontSize="sm" m="2">
                  Pillow menu
                </Text>
                <Text fontSize="sm" m="2">
                  Pillowtop bed
                </Text>
                <Text fontSize="sm" m="2">
                  Premium bedding
                </Text>
                <Text fontSize="sm" m="2">
                  Rollaway/extra beds (surcharge)
                </Text>
              </Box>
            </Box>

            <Box m="2">
              <Flex>
                <CheckIcon style={{ margin: "2px" }} />
                <Text ml="2" fontSize="lg" fontWeight="bold">
                  Entertainment
                </Text>
              </Flex>
              <Box m="2" p="2" pt="0">
                <Text fontSize="sm" m="2">
                  42-inch LED TV
                </Text>
                <Text fontSize="sm" m="2">
                  DVD player
                </Text>
                <Text fontSize="sm" m="2">
                  Free newspaper
                </Text>
                <Text fontSize="sm" m="2">
                  HDTV
                </Text>
                <Text fontSize="sm" m="2">
                  iPod dock
                </Text>
                <Text fontSize="sm" m="2">
                  Satellite channels
                </Text>
              </Box>
            </Box>

            <Box m="2">
              <Flex>
                <LocalDiningIcon style={{ margin: "2px" }} />
                <Text ml="2" fontSize="lg" fontWeight="bold">
                  Food and drink
                </Text>
              </Flex>
              <Box m="2" p="2" pt="0">
                <Text fontSize="sm" m="2">
                  24-hour room service
                </Text>
                <Text fontSize="sm" m="2">
                  Champagne service
                </Text>
                <Text fontSize="sm" m="2">
                  Electric kettle
                </Text>
                <Text fontSize="sm" m="2">
                  Free bottled water
                </Text>
                <Text fontSize="sm" m="2">
                  Minibar (fees may apply)
                </Text>
              </Box>
            </Box>

            <Box m="2">
              <Flex>
                <WifiIcon style={{ margin: "2px" }} />
                <Text ml="2" fontSize="lg" fontWeight="bold">
                  Internet
                </Text>
              </Flex>
              <Box m="2" p="2" pt="0">
                <Text fontSize="sm" m="2">
                  Free WiFi
                </Text>
                <Text fontSize="sm" m="2">
                  Free wired Internet
                </Text>
              </Box>
            </Box>

            <Box m="2">
              <Flex>
                <CheckIcon style={{ margin: "2px" }} />
                <Text ml="2" fontSize="lg" fontWeight="bold">
                  More
                </Text>
              </Flex>
              <Box m="2" p="2" pt="0">
                <Text fontSize="sm" m="2">
                  Connecting rooms available
                </Text>
                <Text fontSize="sm" m="2">
                  Daily housekeeping
                </Text>
                <Text fontSize="sm" m="2">
                  Desk
                </Text>
                <Text fontSize="sm" m="2">
                  Free newspaper
                </Text>
                <Text fontSize="sm" m="2">
                  Iron/ironing board (on request)
                </Text>
                <Text fontSize="sm" m="2">
                  Phone
                </Text>
                <Text fontSize="sm" m="2">
                  Safe
                </Text>
              </Box>
            </Box>
          </Box>
          <Box width="50%">
            <Box borderRadius="12px" m="4">
              <Img
                src={data.images[0].url}
                borderRadius="20px"
                alt="room-image"
              />
            </Box>
            <Text fontSize={"lg"} fontWeight="bold" p="3">
              Room Options
            </Text> 
            <Box border="1px solid grey" p="5" borderRadius="14px" >
              <Text fontSize={"sm"} fontWeight="bold" p="4">
                Extras
              </Text>

              <RadioGroup defaultValue="0" color="grey" bg="whiteAlpha.900">
                <Stack
                  direction={["column"]}
                  color="grey"
                  bg="whiteAlpha.900"
                  m="2"
                >
                  <Flex
                    justify="space-between"
                    color="grey"
                    bg="whiteAlpha.900"
                  >
                    <Radio
                      value="0"
                      pos="static"
                      onChange={handleChange}
                      bg="whiteAlpha.900"
                    >
                      <Text bg="whiteAlpha.900">No extras</Text>
                    </Radio>
                    <Text bg="whiteAlpha.900">+$0</Text>
                  </Flex>
                  <Flex
                    justify="space-between"
                    color="grey"
                    bg="whiteAlpha.900"
                  >
                    <Radio
                      value="45"
                      pos="static"
                      onChange={handleChange}
                      bg="whiteAlpha.900"
                    >
                      <Text bg="whiteAlpha.900">Dinner</Text>
                    </Radio>
                    <Text bg="whiteAlpha.900">+$45</Text>
                  </Flex>
                </Stack>
              </RadioGroup>

              <Box bg="whiteAlpha.900">
                <Stack bg="whiteAlpha.900" m="4">
                  <Spacer />
                  <Spacer />
                  <Text color="green" fontSize="10px" mt="5">
                      Fully Refundable
                    </Text>
                  <Spacer />
                  <Spacer />

                  <Spacer />
                  <Text
                    m="2"
                    fontSize="xl"
                    fontWeight={"bold"}
                    bg="whiteAlpha.900"
                  >
                    ${price}
                  </Text>
                  <Text m="2" fontSize={"sm"} color="grey" bg="whiteAlpha.900">
                    ${price + 30} total
                  </Text>
                </Stack>
              </Box>

              <Flex
                justify="space-between"
                p="3"
                bg="whiteAlpha.900"
                borderRadius="20px"
              >
                <Flex m="2" bg="whiteAlpha.900">
                  <Text
                    color="blue"
                    bg="whiteAlpha.900"
                    onClick={onOpen}
                    fontSize="sm"
                    _hover={{ borderBottom: "1px" }}
                  >
                    Price details
                  </Text>
                  <KeyboardArrowRightIcon
                    style={{
                      backgroundColor: "white",
                      color: "blue",
                      marginLeft: "4px",
                    }}
                  />
                </Flex>
                <Link to="/payment">
                  <Button pos="static" colorScheme="blue">
                    Reserve
                  </Button>
                </Link>
              </Flex>

              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize="md">Price details</ModalHeader>
                  <hr />
                  <ModalCloseButton />
                  <ModalBody>
                    <Flex justify="space-between">
                      <Text fontSize="sm">1 night</Text>
                      <Text fontSize="sm">${`${data.roomPrice}`}</Text>
                    </Flex>
                    <Flex justify="space-between">
                      <Text fontSize="sm">Taxes</Text>
                      <Text fontSize="sm">$30</Text>
                    </Flex>
                    {add?( <Flex justify="space-between">
                      <Text fontSize="sm">Dinner</Text>
                      <Text fontSize="sm">$45</Text>
                    </Flex>):""}
                   
                    <Stack>
                      <Spacer />
                      <Spacer />
                      <Spacer />
                    </Stack>
                    <Box border="1px" />
                    <Flex justify="space-between" fontWeight={"bold"} mt="4">
                      <Text fontSize="md">Total</Text>
                      <Text fontSize="md">${`${price + 30}`}</Text>
                    </Flex>
                    <Text color="green" fontSize="10px" mt="5">
                      Fully Refundable
                    </Text>
                    <Flex justify="space-between" mt="5">
                      <Link to="/payment">
                        <Button colorScheme={"blue"}>Reserve</Button>
                      </Link>
                      <Button onClick={onClose}>Close</Button>
                    </Flex>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default RoomInfo;
