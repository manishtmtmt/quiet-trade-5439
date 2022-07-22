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
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const SearchBox = () => {
  const [query, setQuery] = useState("Going to");

  // const options = {
  //   method: 'GET',
  //   url: 'https://hotels4.p.rapidapi.com/locations/search',
  //   params: {query: 'new york', locale: 'en_US'},
  //   headers: {
  //     'X-RapidAPI-Key': 'ff6888e3cfmsh8a0faf8bc6d810ap1edb81jsndf1cc604f5ea',
  //     'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data.suggestions[0].entities);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Flex>
            <Box fontSize="24px" m={"12px"}>
              <i class="fa-solid fa-location-dot"></i>
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
