import React from "react";
import { Text, HStack, VStack, Box, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Card = ({ price, title, rating, reviews, image }) => {
  return (
    <VStack
      h="400px"
      w="200px"
      borderRadius="10px"
      p="10px 5px"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      //   border="1px solid hsla(189,100%,56%,1)"
      alignItems="left"
    >
      <Image w="100%" h="60%" src={image} alt="error" />
      <Text noOfLines={1} color="#718096" fontSize="18px" fontWeight="500">
        {title}
      </Text>
      <HStack>
        <Box fontSize="26px" color="#333" fontWeight="bold" ml="8px">
          ₹{price}
        </Box>
        <Box color="#718096" fontSize="14px" fontWeight="600" pt="6px">
          {" "}
          onwards
        </Box>
      </HStack>
      <Box
        color="#333"
        w="70%"
        ml="10px"
        bgColor="#f9f9f9"
        borderRadius="15px"
        p="0px 5px"
      >
        Free Delivery
      </Box>
      <HStack gap="10px">
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
        <Text color="#718096" fontWeight="400">
          {reviews}
        </Text>
      </HStack>
    </VStack>
  );
};

export default Card;
