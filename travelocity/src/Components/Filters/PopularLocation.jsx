import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react";

const PopularLocation = () => {
  return (
    <>
      <Box fontSize={"1.3rem"} fontWeight="700" mt={"1.5rem"}>
        Popular Location
      </Box>
      <RadioGroup>
        <Stack direction="column" mt={"15px"} gap={"5px"}>
          <Radio>Calangute Beach</Radio>
          <Radio>Colva Beach</Radio>
          <Radio>Varca Beach</Radio>
          <Radio>Majorda Beach</Radio>
          <Radio>Benaulim Beach</Radio>
          <Radio>Dudhsagar Waterfall</Radio>
          <Radio>Miramar Beach</Radio>
          <Radio>Fort Aguada</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
};

export default PopularLocation;
