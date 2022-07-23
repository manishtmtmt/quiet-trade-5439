import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import ListIcon from "@mui/icons-material/List";
import GroupIcon from "@mui/icons-material/Group";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import ShowerIcon from "@mui/icons-material/Shower";
import CheckIcon from "@mui/icons-material/Check";
import SpaIcon from "@mui/icons-material/Spa";
import DeckIcon from "@mui/icons-material/Deck";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AccessibleIcon from "@mui/icons-material/Accessible";

const Amenities = () => {
  return (
    <Box borderRadius="xl" mt="8" bg="whiteAlpha.900" p="2">
      <Flex bg="whiteAlpha.900">
        <Box width="100%" bg="whiteAlpha.900">
          <Text m="2" fontSize="xl" bg="whiteAlpha.900" fontWeight="bold">
            Property amenities
          </Text>
        </Box>

        <Box width="100%" bg="whiteAlpha.900">
          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <WifiIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Internet
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Available in all rooms: Free WiFi and wired Internet
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Available in some public areas: Free WiFi
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <LocalParkingIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Parking and transportation
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Free self parking on site
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Free valet parking on site
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible parking available
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Limo/town car service
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <LocalDiningIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Food and drink
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                8 restaurants and 1 coffee shop/cafe
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                2 bars/lounges and 1 poolside bar
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                24-hour room service
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Coffee/tea in common area(s)
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <LocalDiningIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Restaurants on site
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Seven Kitchens
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                By the Mekong
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Yuuka
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                The Sahib Room
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                XXO
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <ListIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Things to do
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                24-hour fitness center
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Access to nearby health club
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Access to nearby outdoor pool
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Designer stores
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Full-service spa
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Nightclub
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Outdoor pool
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Pilates classes
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Shopping mall
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Steam room
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <GroupIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Family friendly
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Access to nearby outdoor pool
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                DVD player
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Free cribs/infant beds
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Grocery/convenience store
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Laundry facilities
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Rollaway/extra beds (surcharge)
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Outdoor pool
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Snack bar/deli
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Soundproofed rooms
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <LocalConvenienceStoreIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Conveniences
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                ATM/banking services
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Ballroom
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Banquet hall
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Elevator
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Free newspapers in lobby
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Front-desk safe
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Gift shop/newsstand
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Grocery/convenience store
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Library
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <RoomServiceIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Guest services
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                24-hour front desk
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Concierge services
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Daily housekeeping
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Dry cleaning service
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Hair salon
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Laundry facilities
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Luggage storage
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Multilingual staff
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Porter/bellhop
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Tour/ticket assistance
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Turndown service
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wedding services
              </Text>
            </Box>
          </Box>
        </Box>
        <Box width="100%" bg="whiteAlpha.900">
          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <BusinessCenterIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Business services
              </Text>
            </Flex>
            <Box m="2" mt="0" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Business center
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Computer station
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Conference center (20000 square feet of space)
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Meeting rooms - 4
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <DeckIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Outdoors
              </Text>
            </Flex>
            <Box m="2" mt="0" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Free pool cabanas
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Garden
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Pool sun loungers
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Pool umbrellas
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Rooftop terrace
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <SpaIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Spa
              </Text>
            </Flex>
            <Box m="2" mt="0" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                9 treatment rooms
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Aromatherapy
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Ayurvedic treatments
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Body scrubs
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Body treatments
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Body wraps
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Couples treatment room(s)
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Detox wraps
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Facials
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Hydrotherapy
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Manicures and pedicures
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Massage - deep-tissue
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Massage - hot stone
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Massage/treatment rooms
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Reflexology
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Sauna
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Spa open daily
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Spa tub
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Steam room
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <AccessibleIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Accessibility
              </Text>
            </Flex>
            <Box m="2" mt="0" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Accessible bathtub
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Doorbell and phone notification
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Grab bar near toilet
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Handrails in stairways
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Height-adjustable showerhead
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                In-room accessibility (select rooms)
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Lever door handles
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Low-height door lock
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Low-height electrical outlets in bathroom
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Pool access ramp on site
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Roll-in shower (select rooms)
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Stair-free path to entrance
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Valet for wheelchair-equipped vehicle
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Visual fire alarm
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Well-lit path to entrance
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible business center
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible concierge desk
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible fitness center
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible lounge
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible parking
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible path of travel
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible path to elevator
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible pool
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible public washroom
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible registration desk
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible restaurant
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchair-accessible spa Wheelchairs available on site
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Wheelchairs available on site
              </Text>
            </Box>
          </Box>
          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <CheckIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                More
              </Text>
            </Flex>
            <Box m="2" mt="0" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Designated smoking areas (fines apply)
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Box m="2" border="0.2px solid grey" />
      <Flex bg="whiteAlpha.900">
        <Box width="100%" bg="whiteAlpha.900">
          <Text m="2" fontSize="xl" bg="whiteAlpha.900" fontWeight="bold">
            Room amenities
          </Text>
        </Box>

        <Box width="100%" bg="whiteAlpha.900">
          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <LocalHotelIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Bedroom
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Air conditioning
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Bed sheets
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Blackout drapes/curtains
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Egyptian cotton sheets
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Free cribs/infant beds
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Heating
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Pillow menu
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Pillow-top mattress
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Premium bedding
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Rollaway/extra beds (surcharge)
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <ShowerIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Bathroom
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Deep soaking bathtub
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Designer toiletries
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Hair dryer
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Private bathroom
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Rainfall showerhead
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Separate bathtub and shower
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Towels
              </Text>
            </Box>
          </Box>
        </Box>

        <Box width="100%" bg="whiteAlpha.900">
          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <CheckIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Entertainment
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                42-inch LED TV
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                DVD player
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                iPod dock
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Satellite channels
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <LocalDiningIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Food and drink
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Champagne service
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Electric kettle
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Free bottled water
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Minibar
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <CheckIcon style={{ backgroundColor: "white", margin: "2px" }} />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                More
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Connecting rooms available
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Desk
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Free newspapers
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Iron/ironing board (on request)
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Phone
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Restaurant dining guide
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Safe
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Separate sitting area
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Slippers
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Soundproofing
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Turndown service
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Amenities;
