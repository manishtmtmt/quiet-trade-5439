import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Flex,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Ads from "./Ads/Ads";
import GuestRating from "./Filters/GuestRating";
import MealPlans from "./Filters/MealPlans";
import PaymentType from "./Filters/PaymentType";
import PopularFliter from "./Filters/PopularFliter";
import PopularLocation from "./Filters/PopularLocation";
import PropertyType from "./Filters/PropertyType";
import { SearchByProperty } from "./Filters/SearchByProperty";
import HotelCard from "./HotelCard";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const getData = () => {
    setloading(true);
    axios
      .get("https://quiet-trade.herokuapp.com/data")
      .then((res) => {
        const { data } = res;
        setData(data);
        setHotels(data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleQueryChange = (val) => {
    setSearchQuery(val);
  };

  const handleStar = useCallback(
    (star) => {
      setloading(true);
      const newData = data.filter((item) => {
        return item.starRating >= star;
      });

      setHotels(newData);

      setTimeout(() => {
        setloading(false);
      }, 2000);
    },
    [data]
  );

  const handleChange = (event) => {
    const range = event.target.value.split(" ").map(Number);
    setPriceFilter(event.target.value);
    handlePriceFilter(range[0], range[1]);
  };

  const handlePriceFilter = (a, b) => {
    setloading(true);
    const newData = data.filter((item) => {
      return item.price >= a && item.price < b;
    });

    setHotels(newData);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box background={"#f0f3f5"}>
      <Container maxW="6xl">
        <Flex>
          <Box w={"30%"}>
            <Box>
              <SearchByProperty
                handleQueryChange={handleQueryChange}
                query={searchQuery}
              />
            </Box>
            <Box>
              <Box fontSize={"1.3rem"} fontWeight="700" mb={"0.5rem"}>
                Filter by
              </Box>
              <Box fontSize={"1rem"} fontWeight="700" m={"1.5rem 0"}>
                Star Rating
              </Box>
              <Grid templateColumns={"repeat(3, 1fr)"} gap="10px" w={"80%"}>
                <Button
                  background={"white"}
                  onClick={() => {
                    handleStar(1);
                  }}
                >
                  <Flex gap={"15px"}>
                    <Text>1</Text>
                    <Text>
                      <StarIcon />
                    </Text>
                  </Flex>
                </Button>
                <Button
                  background={"white"}
                  onClick={() => {
                    handleStar(2);
                  }}
                >
                  <Flex gap={"15px"}>
                    <Text>2</Text>
                    <Text>
                      <StarIcon />
                    </Text>
                  </Flex>
                </Button>
                <Button
                  background={"white"}
                  onClick={() => {
                    handleStar(3);
                  }}
                >
                  <Flex gap={"15px"}>
                    <Text>3</Text>
                    <Text>
                      <StarIcon />
                    </Text>
                  </Flex>
                </Button>
                <Button
                  background={"white"}
                  onClick={() => {
                    handleStar(4);
                  }}
                >
                  <Flex gap={"15px"}>
                    <Text>4</Text>
                    <Text>
                      <StarIcon />
                    </Text>
                  </Flex>
                </Button>
                <Button
                  background={"white"}
                  onClick={() => {
                    handleStar(5);
                  }}
                >
                  <Flex gap={"15px"}>
                    <Text>5</Text>
                    <Text>
                      <StarIcon />
                    </Text>
                  </Flex>
                </Button>
              </Grid>
            </Box>
            <Box>
              <Box fontSize={"1.3rem"} fontWeight="700" mt={"1.5rem"}>
                Your Budget
              </Box>
              <RadioGroup>
                <Stack
                  direction="column"
                  mt={"15px"}
                  gap={"5px"}
                  onChange={handleChange}
                  value={priceFilter}
                >
                  <Radio value="0 75">Less than 75$</Radio>
                  <Radio value="75 125">75$ to 125$</Radio>
                  <Radio value="125 200">125$ to 200$</Radio>
                  <Radio value="200 300">200$ to 300$</Radio>
                  <Radio value="300 1000">300$ and above</Radio>
                </Stack>
              </RadioGroup>
            </Box>
            <PopularFliter />
            <GuestRating />
            <PaymentType />
            <PropertyType />
            <PopularLocation />
            <MealPlans />
          </Box>
          <Box w={"50%"}>
            {loading ? (
              <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
                <CircularProgress isIndeterminate />
              </Flex>
            ) : (
              hotels.map((item) => {
                return <HotelCard key={item.hotelId} data={item} />;
              })
            )}
          </Box>
          <Box>
            <Ads />
            <Ads />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HotelList;
