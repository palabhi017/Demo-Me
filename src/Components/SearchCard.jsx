import React from 'react'
import { HStack,Box,Text,Image } from '@chakra-ui/react'
import {StarIcon} from "@chakra-ui/icons"
const SearchCard = ({title,image,rating}) => {
  return (
   <>
   <HStack h="40%" w="98%" ml="4px" boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" gap="6px" p="0px 10px">
                 <Image h="100%" src={image} />
                 <Text w="40%" color="#718096" fontWeight={"bold"} noOfLines={2}>{title}</Text>
                 <Box
          bgColor="#038d63"
          p="3px 8px"
          ml="5px"
          color="white"
          fontWeight="bold"
          borderRadius="10px"
        >
          {rating} <StarIcon color="white" boxSize="10px" />
        </Box>
              </HStack>
   </>
  )
}

export default SearchCard