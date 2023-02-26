import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, HStack, Skeleton } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/product.action";
import Card from "../Components/Card";
import Filter from "../Components/Filter";

import { useSearchParams } from "react-router-dom";
const Productpage = () => {
  // const products = useSelector((state) => state.productReducer.Products);
  const { Products, isLoading } = useSelector((state) => state.productReducer);
  const [totalPages, setTotalpages] = useState(0);
  const [test, setTest] = useState(0);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  //  if(products.length > 0){
  //   let total = products.length/10
  //   setTotalpages(total)
  //   let num=0
  //   // let arr = Array(totalPages).fill(0)
  //   console.log(totalPages)
  //  }

  const handlesort = () => {
    if (Products.length > 0) {
      const getProductsParam = {
        params: {
          category: Products && Products[0].category,
          tag: searchParams.getAll("filter"),
          _sort: "price",
          _order: searchParams.get("sort"),
        },
      };

      dispatch(getProducts(getProductsParam));
    }
  };

  useEffect(() => {
    if (searchParams.get("sort") || searchParams.getAll("filter")) {
      handlesort();
    }
  }, [searchParams]);

  // useEffect(()=>{
  //   if(products.length > 0){
  //       let total = Math.ceil(products.length/10)
  //       setTotalpages(total)
  //       let num=0
  //       let arr = Array(totalPages).fill(++num)
  //       console.log(arr)
  //      }
  // },[totalPages,searchParams])
  return (
    <>
      <HStack alignItems="top">
        <Box p="30px 10px" w="25%">
          <Filter handlesort={handlesort} />
        </Box>
        <Box pt="30px" w="85%">
          <Skeleton isLoaded={!isLoading}>
            <SimpleGrid
              w="95%"
              // p="10px 80px 30px 80px"
              margin="auto"
              spacing={6}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              columns={4}
              pl="20px"
              // gap="20px"
            >
              {Products.length && Products.map((e) => <Card {...e} />)}
            </SimpleGrid>
          </Skeleton>
        </Box>
      </HStack>
    </>
  );
};

export default Productpage;
