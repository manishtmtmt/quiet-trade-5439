import { Box, Checkbox, Stack } from "@chakra-ui/react";
import React from "react";

const PopularFliter = () => {
  return (
    <>
      <Box fontSize={"1.3rem"} fontWeight="700" mt={"1.5rem"}>
        Popular Filter
      </Box>
      <Stack gap={"5px"} mt="15px">
        <Checkbox>Breakfast Included</Checkbox>
        <Checkbox>Ocean View</Checkbox>
        <Checkbox>Hotel Resort</Checkbox>
        <Checkbox>Hotel</Checkbox>
        <Checkbox>Villa</Checkbox>
      </Stack>
    </>
  );
};

export default PopularFliter;
