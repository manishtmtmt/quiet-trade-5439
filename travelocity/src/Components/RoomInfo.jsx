import { Box, CloseButton, Flex, Img, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
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

import { LoadData } from "../Redux/AppReducer/LocalStorage";
import { useLocation, useNavigate } from "react-router-dom";

const RoomInfo = () => {
  const data = LoadData("roomdetail");
  console.log(data);
  const navigate = useNavigate();

  const location = useLocation();

  const handleclose = () => {
    navigate(location.state.pathname);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bg="white">
      <Flex borderBottom="1px">
        <CloseButton size="lg" color="blue" onClick={handleclose} />
        <Text mt="2">Room information</Text>
      </Flex>
      <Flex m="auto"  justify="center" >
        <Flex justify="center"  width="90%">
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
            <Box></Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default RoomInfo;
