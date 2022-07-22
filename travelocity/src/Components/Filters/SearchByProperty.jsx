import { Box, Input } from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled.div`
  .search-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
`;

export const SearchByProperty = ({ handleQueryChange, query }) => {
  return (
    <Wrapper>
      <Box className="search-title">Search by property name</Box>
      <Box mb={"20px"}>
        <Input
          placeholder="Property name"
          size="lg"
          background={"white"}
          w="200px"
          value={query}
          onChange={(e) => {
            handleQueryChange(e.target.value);
          }}
        />
      </Box>
      <hr />
    </Wrapper>
  );
};
