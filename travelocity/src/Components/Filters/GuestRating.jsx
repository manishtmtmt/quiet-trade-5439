import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react";

const GuestRating = () => {
  return (
    <>
      <Box fontSize={"1.3rem"} fontWeight="700" mt={"1.5rem"}>
        Guest rating
      </Box>
      <RadioGroup>
        <Stack direction="column" mt={"15px"} gap={"5px"}>
          <Radio>Any</Radio>
          <Radio>Wonderful 4.5+</Radio>
          <Radio>Very Good 4+</Radio>
          <Radio>Good 3.5+</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default GuestRating;
