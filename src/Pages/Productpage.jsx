import React, { useEffect } from "react";
import { Box, SimpleGrid, HStack, VStack, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/product.action";
import Card from "../Components/Card";
import Filter from "../Components/Filter";

const Productpage = () => {
  const products = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  console.log(products);

  const getcate = () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    getcate();
  }, []);
  return (
    <>
      <HStack alignItems="top">
        <Box p="30px 10px" w="25%">
          <Filter />
        </Box>
        <Box pt="30px" w="75%">
          <SimpleGrid columns={4} pl="20px" gap="20px">
            {products && products.map((e) => <Card {...e} />)}
          </SimpleGrid>
        </Box>
      </HStack>
    </>
  );
};

export default Productpage;
