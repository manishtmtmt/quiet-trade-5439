import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SocialDistanceIcon from '@mui/icons-material/SocialDistance';
import CheckIcon from '@mui/icons-material/Check';

const AboutProperty = ({ data }) => {
  return (
    <Box borderRadius="xl" mt="8" bg="whiteAlpha.900" p="2">
      <Flex bg="whiteAlpha.900">
        <Box width="100%" bg="whiteAlpha.900">
          <Text m="2" fontSize="xl" bg="whiteAlpha.900" fontWeight="bold">
            About this property
          </Text>
        </Box>
        <Box width="100%" bg="whiteAlpha.900">
          <Box bg="whiteAlpha.900">
            <Flex bg="whiteAlpha.900">
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                {data?.line1}
              </Text>
            </Flex>
            <Text
              noOfLines={[1, 2, 10]}
              bg="whiteAlpha.900"
              fontSize={"sm"}
              m="4"
              width="50%"
            >
              {`This hotel features 8 resturants, a full-service spa, and an outdoor pool, Free Wifi in public areas and free valet parking are also provided. Additionally, a nightclub, 2 bars/lounges, and a 24-hour fitness center are onsite.`}
            </Text>
          </Box>
          <Box bg="whiteAlpha.900">
            <Flex bg="whiteAlpha.900">
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Languages
              </Text>
            </Flex>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
              Chinese (Mandarin), English, German, Hindi
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box m="2" border="0.2px solid grey" />
      <Flex bg="whiteAlpha.900">
        <Box width="100%" bg="whiteAlpha.900">
          <Text m="2" fontSize="xl" bg="whiteAlpha.900" fontWeight="bold">
            Cleaning and safety practices
          </Text>
        </Box>
        <Box width="100%" bg="whiteAlpha.900">
          <Box bg="whiteAlpha.900">
            <Flex bg="whiteAlpha.900">
              <AutoAwesomeIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Enhanced cleanliness measures
              </Text>
            </Flex>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            Disinfectant is used to clean the property
            </Text>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            High-touch surfaces are cleaned and disinfected
            </Text>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            Sheets and towels are washed at 60°C/140°F or hotter
            </Text>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            Follows standard cleaning and disinfection practices of Commitment to Clean (Marriott)
            </Text>
          </Box>
          <Box bg="whiteAlpha.900">
            <Flex bg="whiteAlpha.900">
            <SocialDistanceIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
              Social distancing
              </Text>
            </Flex>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            Protective shields in place at main contact areas
            </Text>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            Social distancing measures in place
            </Text>
          </Box>
          <Box bg="whiteAlpha.900">
            <Flex bg="whiteAlpha.900">
            <CheckIcon
                style={{ backgroundColor: "white", margin: "2px" }}
              />
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
              Safety measures
              </Text>
            </Flex>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            Personal protective equipment worn by staff
            </Text>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            Temperature checks given to staff
            </Text>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            Temperature checks available for guests
            </Text>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            Masks and gloves available
            </Text>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            Hand sanitizer provided
            </Text>
            <Text bg="whiteAlpha.900" fontSize="sm" m="2">
            This information is provided by our partners.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutProperty;
