/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Image,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Searchbar from "../Components/Searchbar";
import { Footer } from "../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getResortData } from "../Redux/AppReducer/action";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import Spinner2 from "../Components/Spinner";
export const ResortsPage = () => {

  const dispatch = useDispatch();

  const resortsData = useSelector((state) => state.AppReducer.data); // getting data from the store

  const loading = useSelector((state) => state.AppReducer.loading); // getiing loading state from the store

  //gettting the data from the store when page refreshes 
  useEffect(() => {
    dispatch(getResortData());
  }, []);

  return (
    <Container maxW="100%" bg="#f0f3f5">
      <Searchbar />
      <Box w="80%" m="auto" mb="50px">
        <Box
          boxShadow="md"
          rounded="xl"
          mt="50px"
          p="2"
          border="0.5px solid lightgrey"
        >
          <Heading fontSize="20px">Get More Bang for Less Buck.</Heading>
          <Text fontSize="13px" pt="4px">
            Eat all the food. Drink all the drinks. Be entertained. Think of
            nothing beyond having a great time, making a splash in the pool and
            soaking up sun on the beach. All-inclusive getaways mean you and
            your family are having all the carefree fun you’ve been dreaming
            about. Free cancellation on most hotels. Some hotels require you to
            cancel more than 24 hours before check in. Please check the site for
            details. Note: International destinations may have travel
            restrictions in place due to COVID-19. Please check federal, state
            and local advisories before scheduling trips.
          </Text>
        </Box>
        {/* Added loading indicator (spinner) */}
        {loading ? (
          <Spinner2 />
        ) : (
          <Grid
            bg="white"
            mt="20px"
            gridTemplateColumns="repeat(3,1fr)"
            gap={3}
          >
            {resortsData.map((ele, i) => (
              <Box
                cursor="pointer"
                key={i}
                border="1px solid lightgrey"
                boxShadow="lg"
                rounded="lg"
              >
                <Image src={ele.image} w="100%" h="170px" roundedTop="lg" />
                <Box p="2">
                  <Heading fontSize="lg" h="25px" overflow="hidden">
                    {ele.title}
                  </Heading>
                  <Text fontSize="12">{ele.city}</Text>
                  <Text fontSize="14" fontWeight="bold">
                    {ele.rating}
                  </Text>
                  <Flex justifyContent="right">
                    <Box
                      alignItems="right"
                      rounded="sm"
                      fontSize="10px"
                      p="1"
                      bg={
                        ele.discount === "Member Discount available"
                          ? "lightgrey"
                          : "green"
                      }
                      w="fit-content"
                      color={
                        ele.discount === "Member Discount available"
                          ? "#0a438b"
                          : "white"
                      }
                      fontWeight="400"
                    >
                      {ele.discount}
                    </Box>
                  </Flex>
                  <Text fontWeight="600" fontSize="12" color="green">
                    Fully Refundable Options
                  </Text>
                  <Flex justifyContent="right">
                    <Flex alignItems="center" gap={"0.9px"}>
                      <InfoOutlineIcon fontSize="13" />
                      <Text as="del" fontSize="14" alignItems="center">
                        {ele.strikeOffPrice}
                      </Text>
                    </Flex>
                    <Text fontSize="lg" fontWeight="bold" w="60px">
                      {ele.price}
                    </Text>
                  </Flex>
                  <Flex justifyContent="space-between" pr="4">
                    <Text fontSize="10">{ele.date}</Text>
                    <Text fontSize="10">per night</Text>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Grid>
        )}

        <Box mt="30px">
          <Heading fontSize="2xl">Find all-inclusive resort deals</Heading>
          <Heading fontSize="sm" pt="1">
            Where are there all-inclusive resorts?
          </Heading>
          <Text fontSize="12px" pt="1">
            All-inclusive resorts can be found all over the world, but they are
            most common in tropical locations, such as the Yucatán Peninsula,
            the Caribbean and Thailand. Travelocity has last-minute,
            all-inclusive travel deals available for when you decide it’s time
            to take some time off work and relax.
          </Text>
          <Heading fontSize="sm" pt="5">
            Where are there all-inclusive resorts?
          </Heading>
          <Text fontSize="12px" pt="2">
            All-inclusive deals usually mean that your hotel or resort includes
            your accommodations, meals, drinks and activities at a fixed price.
            In many cases, all-inclusive resorts also include alcoholic drinks
            for guests of legal drinking age, so you can relax by the pool with
            a cocktail in hand and not worry about racking up a bill. Depending
            on which all-inclusive resort you book, included activities may
            range from regional tours and water sports to private beach access
            and spa services.
          </Text>
          <Heading fontSize="sm" pt="10">
            Terms and conditions
          </Heading>
          <Text fontSize="12px" pt="2">
            <Text>
              All travel is subject to frequently changing governmental
              restrictions--please check federal, state and local advisories
              before scheduling trips.
            </Text>
          </Text>
          <Text fontSize="12px" pt="1">
            Hotels: Offers valid at participating hotels only. Minimum night
            stay may be required and rules, restrictions, and blackout dates may
            apply. Please check individual property for details. Hotel prices
            displayed are per room per stay based on the cheapest double room
            available on the specific dates shown. Prices are updated regularly
            and are accurate when published. Applicable discount, if any, will
            be applied to the price of selected hotels, excluding taxes and
            other fees. Additional terms may apply.
          </Text>
          <Text fontSize="12px" pt="1">
            Vacation Rental: Offers valid at participating vacation rental
            properties only. Minimum night stay may be required and rules,
            restrictions, and blackout dates may apply. Please check individual
            property for details. Property prices displayed are per night for
            stays on the specific dates shown and do not include taxes, fees, or
            damage deposit details. Prices and availability may change depending
            on number of people. Prices are updated regularly and are accurate
            when published. Applicable discount, if any, will be applied to the
            price of selected properties, excluding taxes and other fees.
            Additional terms may apply.
          </Text>
          <Text fontSize="12px" pt="1">
            Air Pricing: Sample air prices are quoted for one adult and include
            taxes and fees for round-trip travel on the promoted airline from
            the specified airports, inclusive of all taxes. Prices do not
            include baggage fees that may be charged by the applicable airline.
            Actual price may vary based on time/date of search, booking date,
            travel dates, origin, and destination, and blackout periods may
            apply. Please check airline for details. Lower fares may be
            available to selected destinations. Prices, quoted in U.S. dollars,
            are updated regularly and are accurate when published. Portions of
            these flights may be operated by the airlines code-share partners.
            Seats are limited and may not be available on all flights/dates.
            Fares and rules are subject to change without notice. Tickets are
            nontransferable and nonrefundable. Read the complete penalty rules
            for changes and cancellations applicable to the fare you're
            considering booking.
          </Text>
          <Text fontSize="12px" pt="1">
            Package: Package prices quoted are per person per stay based on the
            cheapest return flights and two people sharing the cheapest double
            room at participating hotels, inclusive of all taxes, on the
            specific dates shown, and blackout periods may apply. Please check
            individual property and airline for details Package prices do not
            include resort fees or other fees charged directly by the included
            hotel. Package prices do not include baggage fees or other fees
            charged directly by the airline for the included flight. Prices are
            updated regularly and are accurate when published. Savings will vary
            based on origin/destination, length of trip, stay dates and selected
            travel supplier(s). Savings are not available on all packages.
            Package offers are subject to all applicable terms and conditions
            for hotel and air.{" "}
          </Text>
          <Text fontSize="12px" pt="1">
            Activity: Prices displayed are for activities on the specific dates
            shown, and include promotional discounts referred to. Blackout
            periods may apply. Please check individual activity for details.
            Discounts are applied to the standard price of selected activities
            excluding applicable taxes and fees. Activities prices displayed are
            per person based on the cheapest offer available, inclusive of all
            taxes and service fees. Prices are updated regularly and are
            accurate when published. Blackout periods may apply. Offers are
            subject to limited availability and may be discounted without
            notice. Please check individual activity for details and to confirm
            prices, availability, and applicable terms and conditions.
          </Text>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};
