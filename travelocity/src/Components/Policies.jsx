import { Box, Flex, HStack, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Policies = () => {
  const icons = [
      "https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg",
      "https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg",
      "https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg",
    "https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg",
    "https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg",
    "https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg",
  ];

  return (
    <Box borderRadius="xl" mt="8" bg="whiteAlpha.900" p="2">
      <Flex bg="whiteAlpha.900">
        <Box width="50%" bg="whiteAlpha.900">
          <Text m="2" fontSize="xl" bg="whiteAlpha.900" fontWeight="bold">
            Policies
          </Text>
        </Box>
        <Box width="100%" bg="whiteAlpha.900">
          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <Box bg="whiteAlpha.900">
                <Text
                  ml="2"
                  fontSize="lg"
                  bg="whiteAlpha.900"
                  fontWeight="bold"
                >
                  Check-in
                </Text>
                <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
                  <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                    Check-in from 3:00 PM - anytime
                  </Text>
                  <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                    Early check-in subject to availability
                  </Text>
                  <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                    Early check-in is available for a fee (amount varies)
                  </Text>
                  <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                    Express check-in
                  </Text>
                  <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                    Minimum check-in age - 18
                  </Text>
                </Box>
              </Box>

              <Box bg="whiteAlpha.900">
                <Text
                  ml="2"
                  fontSize="lg"
                  bg="whiteAlpha.900"
                  fontWeight="bold"
                >
                  Check-out
                </Text>
                <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
                  <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                    Check-out before noon
                  </Text>
                  <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                    Late check-out subject to availability
                  </Text>
                  <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                    A late check-out fee will be charged
                  </Text>
                  <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                    Express check-out
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Special check-in instructions
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Front desk staff will greet guests on arrival
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                To register at this property, guests who are Indian citizens
                must provide a valid photo identity card issued by the
                Government of India; travelers who are not citizens of India
                must present a valid passport and visa.
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Access methods
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Staffed front desk
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Pets
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                No pets or service animals allowed
              </Text>
            </Box>
          </Box>
          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Children and extra beds
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Children are welcome
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Kids stay free! One child 5 years old or younger stays free when
                using existing bedding
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Rollaway/extra beds are available for INR 2500.0 per night
              </Text>
              <Text bg="whiteAlpha.900" fontSize="sm" m="2">
                Free cribs (infant beds)
              </Text>
            </Box>
          </Box>

          <Box bg="whiteAlpha.900" m="2">
            <Flex bg="whiteAlpha.900">
              <Text ml="2" fontSize="lg" bg="whiteAlpha.900" fontWeight="bold">
                Property payment types
              </Text>
            </Flex>
            <Box m="2" bg="whiteAlpha.900" p="2" pt="0">
              <HStack bg="whiteAlpha.900">
                {icons.map((el, i) => {
                  return (
                    <Box bg="whiteAlpha.900"   key={i}>
                      <Img
                        src={el}
                      
                        alt="card-logo"
                        bg="whiteAlpha.900"
                      />
                    </Box>
                  );
                })}
              </HStack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Policies;
