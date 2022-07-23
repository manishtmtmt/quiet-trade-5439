import {
  Box,
  Button,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Spacer,
  Stack,
  Text,
  useDisclosure,
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
import { Link, useLocation } from "react-router-dom";
import { SaveData } from "../Redux/AppReducer/LocalStorage";

const Card = ({ data }) => {
  const [price, setPrice] = useState(data.roomPrice);
  const location = useLocation();
  // console.log(location);
  const [add, setAdd] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // console.log(data);

  const handleChange = (e) => {
    let { value } = e.target;
    setPrice(data.roomPrice + Number(value));
    if (value == "45") {
      setAdd(true);
    } else {
      setAdd(false);
    }
  };
  return (
    <Box
      borderRadius="xl"
      pos="static"
      border="2px solid grey"
      bg="whiteAlpha.900"
    >
      <Img
        src={data.images[0].url}
        alt="Room-Image"
        pos="static"
        _hover={{
          opacity: "0.8",
        }}
        cursor="pointer"
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
      <Link
        to={`/Hoteldetail/${data?.roomTypeId}`}
        state={{ pathname: location.pathname }}
      >
        <Flex
          ml="2"
          fontSize="sm"
          bg="whiteAlpha.900"
          onClick={() => {
            SaveData("roomdetail", data);
          }}
          cursor="pointer"
        >
          <Text
            ml="2"
            mb="2"
            color="blue"
            bg="whiteAlpha.900"
            _hover={{ borderBottom: "1px" }}
          >
            More details
          </Text>
          <KeyboardArrowRightIcon
            style={{
              backgroundColor: "white",
              color: "blue",
              marginLeft: "4px",
            }}
          />
        </Flex>
      </Link>
      <Box border="0.5px solid grey" />
      <Text fontSize="sm" ml="2" bg="whiteAlpha.900" fontWeight="bold">
        Extras
      </Text>

      <RadioGroup defaultValue="0" color="grey" bg="whiteAlpha.900">
        <Stack direction={["column"]} color="grey" bg="whiteAlpha.900" m="2">
          <Flex justify="space-between" color="grey" bg="whiteAlpha.900">
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
          <Flex justify="space-between" color="grey" bg="whiteAlpha.900">
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
          <Spacer />
          <Spacer />

          <Spacer />
          <Text m="2" fontSize="xl" fontWeight={"bold"} bg="whiteAlpha.900">
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
            {add ? (
              <Flex justify="space-between">
                <Text fontSize="sm">Dinner</Text>
                <Text fontSize="sm">$45</Text>
              </Flex>
            ) : (
              ""
            )}
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
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Card;
