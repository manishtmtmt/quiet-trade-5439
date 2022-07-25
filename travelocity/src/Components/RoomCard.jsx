import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

const RoomCard = ({Rmd,star}) => {
    // console.log(star)
  return (
    <Box >
        <SimpleGrid columns={[3]} gap="5" p="2">

        {Rmd?.map((room,index)=>{
            return <Card key={index} data={room} star={star}/>
        })}
        </SimpleGrid>
    </Box>
  )
}

export default RoomCard