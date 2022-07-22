import { Box, Checkbox, Stack } from "@chakra-ui/react";
import React from "react";

const PropertyType = () => {
  return (
    <>
      <Box fontSize={"1.3rem"} fontWeight="700" mt={"1.5rem"}>
        Property Type
      </Box>
      <Stack gap={"5px"} mt="15px">
        <Checkbox>Hotel resort</Checkbox>
        <Checkbox>Hotel</Checkbox>
        <Checkbox>Villa</Checkbox>
        <Checkbox>Private Vacation Home</Checkbox>
        <Checkbox>Condominium resort</Checkbox>
        <Checkbox>Residence</Checkbox>
        <Checkbox>Condo</Checkbox>
        <Checkbox>Townhouse</Checkbox>
      </Stack>
    </>
  );
};

export default PropertyType;