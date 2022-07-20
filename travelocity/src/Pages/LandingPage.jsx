import React from "react";
import { Box, Container, Flex, Image } from "@chakra-ui/react";
export const LandingPage = () => {
  return (
    <Container border="2px solid red" maxW="100%">
      <Box bg="yellow.100" maxW="80%" m="auto">
        <Flex border="2px solid green" gap="6">
          <Box w="32%" h="210px" border="1px solid black">
            <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_FitForYou_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium" />
          </Box>
          <Box w="32%" border="1px solid black">
            <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_Transparency_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium"/>
          </Box>
          <Box w="32%" border="1px solid black">
            <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_GotYourBack_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium"/>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};
