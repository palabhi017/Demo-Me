import React from "react";
import {
  Heading,
  Stack,
  Text,
  Divider,
  Button,
  Box,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
// import { DeleteIcon } from "@chakra-ui/icons";
const Ordercard = ({ title, image, price, quantity }) => {
  return (
    <Card h="420px">
      <CardBody h="85%">
        <Image w="90%" h="70%" src={image} alt="error" borderRadius="lg" />
        <Stack mt="2" spacing="1">
          <Heading textAlign={"left"} color="#999" noOfLines={2} size="md">
            {title}
          </Heading>

          <Text align={"center"} color="blue.600" fontSize="2xl">
            ₹{price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack>
          <Box>{quantity}</Box>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default Ordercard;
