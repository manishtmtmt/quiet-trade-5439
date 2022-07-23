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
  // console.log(starRating)
  const star = () => {
    if (starRating >= 3 && starRating < 4) {
      return (
        <Box align="start" color="grey" mt="0" ml="2" bg="whiteAlpha.900" >
          <StarIcon style={{backgroundColor:"white"}}/>
          <StarIcon style={{backgroundColor:"white"}}/>
          <StarIcon style={{backgroundColor:"white"}}/>
        </Box>
      );
    } else if (starRating >= 4 && starRating < 5) {
      return (
        <Box align="start" m="2"  color="grey" ml="2"  bg="whiteAlpha.900">
          <StarIcon style={{backgroundColor:"white"}}/>
          <StarIcon style={{backgroundColor:"white"}}/>
          <StarIcon style={{backgroundColor:"white"}}/>
          <StarIcon style={{backgroundColor:"white"}}/>
        </Box>
      );
     
    }
    else if(starRating >= 5){
      return (
        <Box align="start" m="2"  color="grey" ml="2"  bg="whiteAlpha.900">
          <StarIcon style={{backgroundColor:"white"}}/>
          <StarIcon style={{backgroundColor:"white"}}/>
          <StarIcon style={{backgroundColor:"white"}}/>
          <StarIcon style={{backgroundColor:"white"}}/>
          <StarIcon style={{backgroundColor:"white"}}/>
        </Box>
      );
    }
  };

  const TextOnRating = () => {
    if (starRating >= 3 && starRating < 4) {
      return "Average";
    } else if (starRating >= 4) {
      return `Wonderful`;
    } else if (starRating < 3) {
      return "Poor";
    }
  };

  const Reviews = () => {
    if (starRating >= 3 && starRating < 4) {
      return 500;
    } else if (starRating >= 4) {
      return 1000;
    } else if (starRating < 3) {
      return 300;
    }
  };
  // console.log(props)
  return (
    <Flex justify="space-evenly" bg="whiteAlpha.900" p="2" >
      <Box  w="700px" h="500px"  bg="whiteAlpha.900">
        <Text fontSize="4xl" fontWeight="bold" align="start" mt="4" ml="2"  bg="whiteAlpha.900">
          {name}
        </Text>
        {star()}
        <Flex m="4"  bg="whiteAlpha.900">
          <Text bg="whiteAlpha.900" fontSize="lg" fontWeight={"bold"}>{`${starRating}/5`}</Text>{" "}
          <Text bg="whiteAlpha.900" ml="2" fontSize="lg" fontWeight="bold">
            {TextOnRating()}
          </Text>
        </Flex>
        <Text color="grey" align="left" ml="2" mt="-3" fontSize="sm"  bg="whiteAlpha.900">
          Guests rated this property 4.7/5 for cleanliness.
        </Text>
        <Text
         bg="whiteAlpha.900"
          color="blue.400"
          letterSpacing="-2%"
          align="left"
          fontSize="sm"
          m="2"
        >
          See all {Math.floor(Math.random() * Reviews() + 1)} reviews{" "}
          <ChevronRightIcon style={{backgroundColor:"white"}} />
        </Text>

        <Text fontSize="lg" fontWeight="bold" ml="2" align={"left"}  bg="whiteAlpha.900">
          Popular amenities
        </Text>

        <SimpleGrid columns={[2]} spacing="40px"  bg="whiteAlpha.900" >
          <Flex m="2" bg="whiteAlpha.900">
            <PoolIcon  style={{backgroundColor:"white"}}/>{" "}
            <Text align="left" ml="3" color="grey" bg="whiteAlpha.900">
              Pool
            </Text>
          </Flex>
          <Flex m="2"  bg="whiteAlpha.900">
            <AcUnitIcon  style={{backgroundColor:"white"}}/>
            <Text align="left" ml="3" color="grey"  bg="whiteAlpha.900">
              Air Conditioning
            </Text>
          </Flex>
          <Flex m="2" bg="whiteAlpha.900">
            <WifiIcon  style={{backgroundColor:"white"}}/>
            <Text align="left" ml="3" color="grey"  bg="whiteAlpha.900">
              Free Wifi
            </Text>
          </Flex>
          <Flex m="2" bg="whiteAlpha.900">
            <SpaIcon  style={{backgroundColor:"white"}} />
            <Text align="left" ml="3" color="grey"  bg="whiteAlpha.900">
              Spa
            </Text>
          </Flex>
          <Flex m="2" bg="whiteAlpha.900">
            <LocalParkingIcon  style={{backgroundColor:"white"}} />
            <Text align="left" ml="3" color="grey"  bg="whiteAlpha.900">
              Parking included
            </Text>
          </Flex>
          <Flex m="2" bg="whiteAlpha.900">
            <LocalDiningIcon  style={{backgroundColor:"white"}}/>
            <Text align="left" ml="3" color="grey"  bg="whiteAlpha.900">
              Resturant
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box  w="700px" h="500px"  bg="whiteAlpha.900">
        
      </Box>
    </Flex>
  );
};

export default Overview;
