import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import React from "react";
import TodayIcon from "@mui/icons-material/Today";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const Availability = ({avl}) => {
  // console.log(avl)
  const [border, setBorder] = useState("");
  const toast = useToast()
  const handleSet = (x) => {
    if (border == x) {
      return {border:"2px solid blue"}
    }
   
    else{
      return {border:"1px solid black"}
    }
  };
  return (
      <>
    <Flex justify="space-evenly">
      <Flex
        m="2"
        bg="whiteAlpha.900"
        borderRadius="12px"
        p="2"
        style={handleSet("checkin")}
        onClick={() => setBorder("checkin")}
        width="20%"
      >
        <TodayIcon style={{ backgroundColor: "white", marginTop: "12px" }} />
        <Box ml="3">
          <Text bg="whiteAlpha.900" fontSize="sm" color="grey">
            Check In
          </Text>
          <Text bg="whiteAlpha.900" fontSize="md">
            Aug 3
          </Text>
        </Box>
      </Flex>

      <Flex
        m="2"
        bg="whiteAlpha.900"
        borderRadius="12px"
        p="2"
        style={handleSet("checkout")}
        onClick={() => setBorder("checkout")}
        width="20%"
      >
        <TodayIcon style={{ backgroundColor: "white", marginTop: "12px" }} />
        <Box ml="3">
          <Text bg="whiteAlpha.900" fontSize="sm" color="grey">
            Check Out
          </Text>
          <Text bg="whiteAlpha.900" fontSize="md">
            Aug 4
          </Text>
        </Box>
      </Flex>

      <Flex
        m="2"
        bg="whiteAlpha.900"
        borderRadius="12px"
        p="2"
        style={handleSet("travelers")}
        onClick={() => setBorder("travelers")}
        width="25%"
      >
        <PersonIcon style={{ backgroundColor: "white", marginTop: "12px" }} />
        <Box ml="3">
          <Text bg="whiteAlpha.900" fontSize="sm" color="grey">
            Travelers
          </Text>
          <Text bg="whiteAlpha.900" fontSize="md">
            1 room, 2 travelers
          </Text>
        </Box>
      </Flex>
      <Button colorScheme="blue" pos="static" width="25%" mt="4" size="lg" onClick={() =>
              toast({
                title: `It is Available`,
                status: "success",
                position: "top-right",
                isClosable: true,
                render: () => (
                  <Box color='white' p={3} bg='blue.500' borderRadius="12px">
                  <Text color='white' bg='blue.500'>Available</Text>
                  <Text color='white' bg='blue.500'>{`${avl?.length} Rooms are avialable`}</Text>
                  </Box>
                )
              })
            }>
        Check Availability
      </Button>

    </Flex>
     
      </>
  );
};

export default Availability;
