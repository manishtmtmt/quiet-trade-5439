import { ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WifiIcon from "@mui/icons-material/Wifi";
import PoolIcon from "@mui/icons-material/Pool";
import SpaIcon from "@mui/icons-material/Spa";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import React from "react";

const Overview = ({ name, starRating }) => {
  const star = () => {
    if (starRating >= 3 && starRating <= 4) {
      return (
        <Box align="start" color="grey" mt="0" ml="2" >
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Box>
      );
    } else if (starRating >= 4 && starRating <= 5) {
      return (
        <Box align="start" m="2">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Box>
      );
    }
  };

  const TextOnRating = () => {
    if (starRating >= 3 && starRating <= 4) {
      return "Average";
    } else if (starRating >= 4) {
      return `Wonderful`;
    } else if (starRating < 3) {
      return "Poor";
    }
  };

  const Reviews = () => {
    if (starRating >= 3 && starRating <= 4) {
      return 500;
    } else if (starRating >= 4) {
      return 1000;
    } else if (starRating < 3) {
      return 300;
    }
  };
  // console.log(props)
  return (
    <Flex justify="space-evenly">
      <Box  w="700px" h="500px">
        <Text fontSize="4xl" fontWeight="bold" align="start" mt="4" ml="2">
          {name}
        </Text>
        {star()}
        <Flex m="4">
          <Text fontSize="lg" fontWeight={"bold"}>{`${starRating}/5`}</Text>{" "}
          <Text ml="2" fontSize="lg" fontWeight="bold">
            {TextOnRating()}
          </Text>
        </Flex>
        <Text color="grey" align="left" ml="2" mt="-3" fontSize="sm">
          Guests rated this property 4.7/5 for cleanliness.
        </Text>
        <Text
          color="blue.400"
          letterSpacing="-2%"
          align="left"
          fontSize="sm"
          m="2"
        >
          See all {Math.floor(Math.random() * Reviews() + 1)} reviews{" "}
          <ChevronRightIcon />
        </Text>

        <Text fontSize="lg" fontWeight="bold" ml="2" align={"left"}>
          Popular amenities
        </Text>

        <SimpleGrid columns={[2]} spacing="40px">
          <Flex m="2">
            <PoolIcon />{" "}
            <Text align="left" ml="3" color="grey">
              Pool
            </Text>
          </Flex>
          <Flex m="2">
            <AcUnitIcon />
            <Text align="left" ml="3" color="grey">
              Air Conditioning
            </Text>
          </Flex>
          <Flex m="2">
            <WifiIcon />
            <Text align="left" ml="3" color="grey">
              Free Wifi
            </Text>
          </Flex>
          <Flex m="2">
            <SpaIcon />
            <Text align="left" ml="3" color="grey">
              Spa
            </Text>
          </Flex>
          <Flex m="2">
            <LocalParkingIcon />
            <Text align="left" ml="3" color="grey">
              Parking included
            </Text>
          </Flex>
          <Flex m="2">
            <LocalDiningIcon />
            <Text align="left" ml="3" color="grey">
              Resturant
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box  w="700px" h="500px">
        2
      </Box>
    </Flex>
  );
};

export default Overview;
