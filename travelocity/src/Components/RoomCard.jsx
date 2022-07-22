import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

const RoomCard = ({Rmd}) => {
    // console.log(Rmd)
  return (
    <Box >
        <SimpleGrid columns={[3]} gap="5" p="2">

        {Rmd?.map((room,index)=>{
            return <Card key={index} data={room} />
        })}
        </SimpleGrid>
    </Box>
  )
}

export default RoomCard