import React from "react";
import { Box, Img, Spinner } from "@chakra-ui/react";
import travelocityLogo from "./Logo/travelocityLogo.svg";

const Spinner2 = () => {
  return (
    <Box align="center">
      <Img src={travelocityLogo} alt="travelocitylogo" mt="63" />
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default Spinner2;
