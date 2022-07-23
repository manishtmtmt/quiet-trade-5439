import "../App.css";
import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <Container maxW="100%" mb="70px">
      <Searchbar />
      <Box w="80%" m="auto" mt="80px">
        <Flex gap="6" cursor="pointer">
          <Box w="32%" boxShadow="lg" rounded="md">
            <Text
              fontWeight="700"
              bg="transparent"
              color="white"
              fontSize="lg"
              position="absolute"
              mt="125px"
              ml="5"
              zIndex="1"
            >
              Find your perfect trip
            </Text>
            <Image
              filter="auto"
              brightness={"80%"}
              roundedTop={"md"}
              src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_FitForYou_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium"
            />
            <Text p="3" fontSize="12">
              Plan a trip for the whole family from family travel tips to family
              friendly filters, our tools make it easy.
            </Text>
          </Box>
          <Box w="32%" boxShadow="lg" rounded="md">
            <Text
              position="absolute"
              mt="125px"
              ml="5"
              fontWeight="700"
              bg="transparent"
              color="white"
              fontSize="lg"
              zIndex="1"
            >
              Book with flexibility
            </Text>
            <Image
              filter="auto"
              brightness={"80%"}
              roundedTop={"md"}
              src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_Transparency_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium"
            />
            <Text p="3" fontSize="12">
              Looking for a change of scenery, but want something flexible? With
              free cancellation on most hotels, you can book with peace of mind
            </Text>
          </Box>
          <Box w="32%" boxShadow="lg" rounded="md">
            <Text
              fontWeight="700"
              bg="transparent"
              color="white"
              fontSize="lg"
              position="absolute"
              mt="125px"
              ml="5"
              zIndex="1"
            >
              we've got your back
            </Text>
            <Image
              filter="auto"
              brightness={"80%"}
              roundedTop={"md"}
              src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_GotYourBack_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium"
            />
            <Text p="3" fontSize="12">
              Need more help along your journey? We offer 24/7 support on social
              and through virtual agents onsite.
            </Text>
          </Box>
        </Flex>

        <Flex mt="7" gap="6">
          <Box w="50%" rounded="md">
            <Box
              zIndex="1"
              position="absolute"
              ml="10"
              bg="transparent"
              w="270px"
              mt="65px"
              color="white"
            >
              <Text bg="transparent" fontWeight="700" fontSize="2xl">
                All-inclusive resorts
              </Text>
              <Text bg="transparent" fontSize="sm" fontWeight="500" mt={2}>
                Think of nothing beyond having a great time with your family
              </Text>
            </Box>
            <Link to="/bestresorts">
              <Button
                position="absolute"
                m="40"
                ml="10"
                size="sm"
                fontSize="12"
                color="#515aba"
                zIndex="1"
              >
                View Details
              </Button>
            </Link>
            <Image
              filter="auto"
              brightness={"50%"}
              rounded="md"
              h="250px"
              src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_AllInclusive_imgB_1199x399_20211104.jpg"
            />
          </Box>
          <Box w="50%" rounded="md">
            <Box
              zIndex="1"
              position="absolute"
              ml="10"
              bg="transparent"
              w="300px"
              mt="65px"
              color="white"
            >
              <Text bg="transparent" fontWeight="700" fontSize="2xl">
                Last minute getaways
              </Text>
              <Text bg="transparent" fontSize="sm" fontWeight="500" mt={2}>
                Celebrate the moment with an unexpected getaway
              </Text>
            </Box>

            <Button
              position="absolute"
              m="40"
              ml="10"
              size="sm"
              fontSize="12"
              color="#515aba"
              zIndex="1"
              // onClick={() => navigate("/bestresorts")}
            >
              View Details
            </Button>

            <Image
              filter="auto"
              brightness={"50%"}
              rounded="md"
              h="250px"
              src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_LastMinute_imgB_1199x399_20211104.jpg"
            />
          </Box>
        </Flex>
        <Box mt="7">
          <Text fontSize="2xl" fontWeight="700">
            Start planning your next trip
          </Text>
          <SimpleGrid gap="6" columns={4}>
            <Box boxShadow={"md"} rounded="lg" cursor="pointer">
              <Text
                position="absolute"
                color="white"
                fontWeight="bold"
                fontSize="lg"
                bg="transparent"
                ml="15px"
                mt="150px"
                zIndex="1"
              >
                Sunny beach hotel offers
              </Text>
              <Image
                filter="auto"
                brightness="80%"
                rounded="lg"
                src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Beach_imgB_900x506_20211104.jpg?impolicy=fcrop&w=600&h=400&q=medium"
                alt="sunny-beach"
              />
            </Box>
            <Box boxShadow={"md"} rounded="lg" cursor="pointer">
              <Text
                position="absolute"
                color="white"
                fontWeight="bold"
                fontSize="lg"
                bg="transparent"
                ml="15px"
                mt="150px"
                zIndex="1"
              >
                Car rental deals
              </Text>
              <Image
                filter="auto"
                brightness="80%"
                rounded="lg"
                src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Car_imgB_900x506_20211104.jpg?impolicy=fcrop&w=600&h=400&q=medium"
                alt="sunny-beach"
              />
            </Box>
            <Box boxShadow={"md"} rounded="lg" cursor="pointer">
              <Text
                position="absolute"
                color="white"
                fontWeight="bold"
                fontSize="lg"
                bg="transparent"
                ml="15px"
                mt="150px"
                zIndex="1"
              >
                Member discounts
              </Text>
              <Image
                filter="auto"
                brightness="80%"
                rounded="lg"
                src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_MOD_imgB_900x506_20211104.jpg?impolicy=fcrop&w=600&h=400&q=medium"
                alt="sunny-beach"
              />
            </Box>
            <Box boxShadow={"md"} rounded="lg" cursor="pointer">
              <Text
                position="absolute"
                color="white"
                fontWeight="bold"
                fontSize="lg"
                bg="transparent"
                ml="15px"
                mt="150px"
                zIndex="1"
              >
                Vacation rental offers
              </Text>
              <Image
                filter="auto"
                brightness="80%"
                rounded="lg"
                src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_VacationRentals_imgB_900x506_20211104.jpg?impolicy=fcrop&w=600&h=400&q=medium"
                alt="sunny-beach"
              />
            </Box>
          </SimpleGrid>
        </Box>
        <Box mt="23px">
          <Text fontSize="2xl" fontWeight="700">
            Featured Offers
          </Text>
          <Box
            position="absolute"
            bg="transparent"
            color="white"
            mt="195px"
            ml="4"
            rounded="sm"
            zIndex="1"
          >
            <Text fontSize="14" fontWeight="bold" bg="transparent">
              Family vacation deals
            </Text>
            <Text bg="transparent" fontSize="md">
              Seize your next unforgettable family vacation
            </Text>
          </Box>
          <Image
            filter="auto"
            brightness="80%"
            rounded="lg"
            w="100%"
            objectFit="cover"
            h="248px"
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Family_imgB_1200x674_20211104.jpg"
          />
        </Box>
        <Box mt="30px" rounded="lg">
          <iframe
            borderRadius="20px"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/ItS8X0SjT4s"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
};
