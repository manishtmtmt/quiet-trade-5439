import { Box, Flex, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";

const ImagesSec1 = ({ imgdata }) => {
 
  return (
    <>
      {imgdata ? (
        <Flex  bg="whiteAlpha.900">
          <Box maxW="2xl" p={1}>
            <Image src={imgdata[0]?.url} alt="property-image" />
          </Box>
          <SimpleGrid columns={2} spacing={2} mt={2}  bg="whiteAlpha.900">
            <Box maxW="lg"  bg="whiteAlpha.900">
              <Image src={imgdata[1]?.url} alt="property-image" />
            </Box>
            <Box maxW="lg"  bg="whiteAlpha.900">
              <Image src={imgdata[2]?.url} alt="property-image" />
            </Box>
            <Box maxW="lg"  bg="whiteAlpha.900">
              <Image src={imgdata[3]?.url} alt="property-image" />
            </Box>
            <Box maxW="lg"  bg="whiteAlpha.900">
              <Image src={imgdata[4]?.url} alt="property-image" />
            </Box>
           
          </SimpleGrid>
        </Flex>
      ) : (
        ""
      )}
    </>
  );
};

export default ImagesSec1;
