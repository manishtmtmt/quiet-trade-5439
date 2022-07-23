import {
  Button,
  Container,
  Flex,
  Image,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

export const Navbar = () => {
  const username = "";
  return (
    <Container border="1px solid #0a438b" h="75px" maxW="100%" bg="#0a438b">
      <Flex w="78%" h="80%" ml="180px" mt="2" justifyContent="space-between">
        <Flex w="230px" alignItems="center" justifyContent="space-between">
          <Image
            cursor="pointer"
            w="90px"
            src="https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2"
            alt="travelocity-logo"
          />

          <Popover margin="auto">
            <PopoverTrigger>
              <Button
                variant="link"
                gap="5"
                bg="transparent"
                color="white"
                alignItems="center"
                cursor="pointer"
              >
                More Info <ChevronDownIcon fontSize="xl" />{" "}
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent ml="30%">
                <PopoverCloseButton />
                <PopoverBody>
                  <Text color="#0a438b" p="3" fontSize="14">
                    Packages
                  </Text>
                  <Text color="#0a438b" p="3" fontSize="14">
                    Stays
                  </Text>
                  <Text color="#0a438b" p="3" fontSize="14">
                    Cars
                  </Text>
                  <Text color="#0a438b" p="3" fontSize="14">
                    Flights
                  </Text>
                  <Text color="#0a438b" p="3" fontSize="14">
                    Cruises
                  </Text>
                  <Text colorScheme="blue" p="2" fontSize="14">
                    Things to do
                  </Text>
                  <Text colorScheme="blue" p="2" fontSize="14">
                    Tips for me
                  </Text>
                  <Text colorScheme="blue" p="2" fontSize="14">
                    Discover
                  </Text>
                  <Text colorScheme="blue" p="2" fontSize="14">
                    Travel Deals
                  </Text>
                  <Text colorScheme="blue" p="2" fontSize="14">
                    Get inspires
                  </Text>
                  <Text colorScheme="blue" p="2" fontSize="14">
                    Groups and Meetings
                  </Text>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </Flex>
        <Flex
          w="40%"
          color="white"
          alignItems="center"
          justifyContent="space-around"
          fontWeight="bold"
        >
          <Text fontSize="14px">Esponal</Text>
          <Text fontSize="14px">List your property</Text>
          <Text fontSize="14px">Support</Text>
          <Text fontSize="14px">Trips</Text>
          <Text fontSize="14px">{username ? username : "Signin"}</Text>
        </Flex>
      </Flex>
    </Container>
  );
};
