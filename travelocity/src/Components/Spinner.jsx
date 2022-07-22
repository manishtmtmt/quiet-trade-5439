import React from 'react'
import {Box, Img , Spinner} from "@chakra-ui/react"
import travelocityLogo from "./Logo/travelocityLogo.svg"


const Spinner2 = () => {
  return (
    <Box align="center" >
        <Img src={travelocityLogo} alt="travelocitylogo" mt="63" />
       <Spinner />
    </Box>
  )
}

export default Spinner2