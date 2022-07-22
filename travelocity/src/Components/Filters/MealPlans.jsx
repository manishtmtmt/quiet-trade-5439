import { Box, Checkbox, Stack } from "@chakra-ui/react";
import React from "react";

const MealPlans = () => {
  return (
    <>
      <Box fontSize={"1.3rem"} fontWeight="700" mt={"1.5rem"}>
        Meal plans available
      </Box>
      <Stack gap={"5px"} mt="15px">
        <Checkbox>Breakfast Included</Checkbox>
        <Checkbox>Lunch Included</Checkbox>
        <Checkbox>Dinner Included</Checkbox>
        <Checkbox>All Included</Checkbox>
      </Stack>
    </>
  );
};

export default MealPlans;
