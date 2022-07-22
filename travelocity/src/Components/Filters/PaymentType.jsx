import { Box, Checkbox, Stack } from "@chakra-ui/react";
import React from "react";

const PaymentType = () => {
  return (
    <>
      <Box fontSize={"1.3rem"} fontWeight="700" mt={"1.5rem"}>
        Payment Type
      </Box>
      <Stack gap={"5px"} mt="15px">
        <Checkbox>Fully refundable</Checkbox>
        <Checkbox>Reserve now, pay later</Checkbox>
      </Stack>
    </>
  );
};

export default PaymentType;
