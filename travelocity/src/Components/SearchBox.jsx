import {
  Box,
  Flex,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("Going to");

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Flex>
            <Box fontSize="24px" m={"12px"}>
              <i className="fa-solid fa-location-dot"></i>
            </Box>
            <Box textAlign={"left"} mt="15px">
              {query}
            </Box>
          </Flex>
        </PopoverTrigger>
        <PopoverContent
          width={"280px"}
          position="absolute"
          top={"-75px"}
          left="-140px"
        >
          <PopoverBody>
            <Stack>
              <Box>
                <Input
                  type={"text"}
                  placeholder="Where are you going?"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Box>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SearchBox;
