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
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Ads from "./Ads/Ads";
import GuestRating from "./Filters/GuestRating";
import MealPlans from "./Filters/MealPlans";
import PaymentType from "./Filters/PaymentType";
import PopularFliter from "./Filters/PopularFliter";
import PopularLocation from "./Filters/PopularLocation";
import PropertyType from "./Filters/PropertyType";
import { SearchByProperty } from "./Filters/SearchByProperty";
import { Footer } from "./Footer/Footer";
import HotelCard from "./HotelCard";
import { Navbar } from "./Navbar";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSort = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState(urlSort || "");

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

  const handleSort = (e) => {
    setSortBy(e.target.value)
  };

  if(sortBy === "asc") {
    hotels.sort((a, b) => a.price - b.price)
  }
  else {
    hotels.sort((a, b) => b.starRating - a.starRating)
  }

  useEffect(() => {
    if (sortBy) {
      let params = {};
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [sortBy, setSearchParams]);

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box background={"#f0f3f5"}>
      <Navbar />
      <Container maxW="6xl" mt={"15px"}>
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
            <Box
              w={"50%"}
              float="right"
              border={"1px solid black"}
              p="5px"
              borderRadius={"10px"}
              m="15px"
              fontSize={"0.8rem"}
            >
              Sort by
              <Select
                placeholder="Recommended"
                border={"none"}
                fontSize="0.8rem"
                onChange={handleSort}
              >
                <option value="asc">Price</option>
                <option value="desc">Star rating</option>
              </Select>
            </Box>
            {loading ? (
              <Flex
                justifyContent={"center"}
                alignItems="center"
                height={"100vh"}
              >
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
      <Footer />
    </Box>
  );
};

export default HotelList;
