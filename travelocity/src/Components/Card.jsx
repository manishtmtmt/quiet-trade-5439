import {
  Box,
  Button,
  Flex,
  Img,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GroupIcon from "@mui/icons-material/Group";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import FreeBreakfastTwoToneIcon from "@mui/icons-material/FreeBreakfastTwoTone";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useState } from "react";

const Card = ({ data }) => {
  const [price, setPrice] = useState(data.roomPrice);
  console.log(data);
  return (
    <Box borderRadius="xl" border="2px solid grey" bg="whiteAlpha.900">
      <Img
        src={data.images[0].url}
        alt="Room-Image"
        borderRadius="12px 12px 0 0"
      />

      <Text fontSize={"xl"} p="2" bg="whiteAlpha.900" fontWeight="bold">
        {data.name}
      </Text>
      <Flex m="2" fontSize="sm" bg="whiteAlpha.900">
        <SquareFootIcon style={{ backgroundColor: "white", color: "grey" }} />
        <Text ml="2" color="grey" bg="whiteAlpha.900">
          484 Sq ft
        </Text>
      </Flex>
      <Flex m="2" fontSize="sm" bg="whiteAlpha.900">
        <LocationCityIcon style={{ backgroundColor: "white", color: "grey" }} />
        <Text ml="2" color="grey" bg="whiteAlpha.900">
          City view
        </Text>
      </Flex>
      <Flex m="2" fontSize="sm" bg="whiteAlpha.900">
        <GroupIcon style={{ backgroundColor: "white", color: "grey" }} />
        <Text ml="2" color="grey" bg="whiteAlpha.900">
          Sleeps 3
        </Text>
      </Flex>
      <Flex m="2" fontSize="sm" bg="whiteAlpha.900">
        <LocalHotelIcon style={{ backgroundColor: "white", color: "grey" }} />
        <Text ml="2" color="grey" bg="whiteAlpha.900">
          1 king Bed
        </Text>
      </Flex>
      <Flex m="2" fontSize="sm" bg="whiteAlpha.900">
        <WifiIcon style={{ backgroundColor: "white", color: "grey" }} />
        <Text ml="2" color="grey" bg="whiteAlpha.900">
          Free Wifi
        </Text>
      </Flex>
      <Flex m="2" fontSize="sm" bg="whiteAlpha.900">
        <FreeBreakfastTwoToneIcon
          style={{ backgroundColor: "white", color: "grey" }}
        />
        <Text ml="2" color="grey" bg="whiteAlpha.900">
          Breakfast buffet
        </Text>
      </Flex>
      <Flex m="2" fontSize="sm" bg="whiteAlpha.900">
        <LocalParkingIcon style={{ backgroundColor: "white", color: "grey" }} />
        <Text ml="2" color="grey" bg="whiteAlpha.900">
          Free self parking
        </Text>
      </Flex>
      <Flex ml="2" fontSize="sm" bg="whiteAlpha.900">
        <CheckTwoToneIcon style={{ backgroundColor: "white", color: "grey" }} />
        <Text ml="2" color="grey" bg="whiteAlpha.900">
          Reserve now, pay later
        </Text>
      </Flex>
      <Text color="green" bg="whiteAlpha.900" m="2" fontSize="sm" ml="4">
        Fully refundable
      </Text>
      <Text color="grey" bg="whiteAlpha.900" m="2" fontSize="sm" ml="4">
        Before Mon, Aug 1
      </Text>
      <Flex ml="2" fontSize="sm" bg="whiteAlpha.900">
        <Text ml="2" color="blue" bg="whiteAlpha.900">
          More details
        </Text>
        <KeyboardArrowRightIcon
          style={{ backgroundColor: "white", color: "blue", marginLeft: "4px" }}
        />
      </Flex>
      <Box border="0.5px solid grey" />
      <Text fontSize="sm" ml="2" bg="whiteAlpha.900" fontWeight="bold">
        Extras
      </Text>

      <RadioGroup defaultValue="0" color="grey" bg="whiteAlpha.900">
        <Stack direction={["column"]} color="grey" bg="whiteAlpha.900" m="2">
          <Flex justify="space-between" color="grey" bg="whiteAlpha.900">
            <Radio
              value="0"
              onChange={(e) => setPrice(data.roomPrice + Number(e.target.value))}
              bg="whiteAlpha.900"
            >
              <Text bg="whiteAlpha.900">No extras</Text>
            </Radio>
            <Text bg="whiteAlpha.900">+$0</Text>
          </Flex>
          <Flex justify="space-between" color="grey" bg="whiteAlpha.900">
            <Radio
              value="45"
              onChange={(e) => setPrice(data.roomPrice + Number(e.target.value))}
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
          <Spacer />
          <Spacer />

          <Spacer />
          <Text m="2" fontSize="xl" fontWeight={"bold"} bg="whiteAlpha.900">
            ${price}
          </Text>
          <Text m="2" fontSize={"sm"} color="grey" bg="whiteAlpha.900">
            ${data.roomPrice+30} total
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
          <Text color="blue" bg="whiteAlpha.900" fontSize="sm">
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
        <Button colorScheme="blue">Reserve</Button>
      </Flex>
    </Box>
  );
};

export default Card;
