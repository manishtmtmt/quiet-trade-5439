import {
  Box,
  Button,
  Flex,
  PinInput,
  PinInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const [val, setval] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const checkotp = () => {
    // console.log(val)
    if (val == "4342") {
      toast({
        title: `Booking Successful`,
        status: "success",
        position: "top-middle",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast({
        title: `Wrong Otp`,
        status: "error",
        position: "top-middle",
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    alert("OTP:4342");
  }, []);

  return (
    <Box   p="4" m="auto">
        <Flex>

        <Text m="3">Enter OTP </Text>
      <PinInput onChange={(e) => setval(e)}>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
        </Flex>
      <br></br>
      <br></br>

      <Button colorScheme="blue" onClick={checkotp}>
        Submit
      </Button>
    </Box>
  );
};

export default OTP;
