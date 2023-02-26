
import React, { useEffect,useState } from "react";
import { Box, SimpleGrid, HStack, VStack, Stack, Text, Button,Flex } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Products/product.action";
import Card from "../Components/Card";
import Filter from "../Components/Filter";

import { Link } from "react-router-dom";
import { useSearchParams,useLocation } from "react-router-dom";
import { PRODUCTS_PAGE, PRODUCTS_SUCCESS } from "../Redux/Products/product.type";
const Productpage = () => {
  const products = useSelector((state) => state.productReducer.Products);
  const activePage = useSelector((state) => state.productReducer.currPage);
  
  // const [page,setPage] = useState(1)
  const [searchParams] = useSearchParams()
const totalPages = Math.ceil(products?.length/10)
 const dispatch = useDispatch()
 
//  if(products){
   
//   setTotalpages(products.length/10)
  
//  }
 
    
   const handlesort=()=>{
    if(products.length>0){
      const getProductsParam = {
        params: {
            category: products && products[0].category,
            tag:searchParams.getAll("filter"),
            _sort: "price",
            _order: searchParams.get("sort"),
           
        }
    }
    
    dispatch(getProducts(getProductsParam))
    dispatch({type:PRODUCTS_PAGE,payload:1})
    
    }
  }
  
  useEffect(()=>{
  
    if(searchParams.get("sort")|| searchParams.getAll("filter")){
      handlesort()
      
    }
   },[searchParams])

  
  
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
        <Box pt="30px" w="75%">
          <SimpleGrid columns={4} pl="20px" gap="20px">
            {products.length && products.filter((_,index)=> {return (
              index >= 10* (activePage-1) && 
              index < 10 * activePage
            )}).map((e) => <Card {...e} />)}
          </SimpleGrid>
          <Flex w="80px" m="auto"  mt="30px" gap="3px" mb="10px">
        <Button isDisabled={activePage===1} bgColor={"teal.500"} color="white" fontSize={"20px"} fontWeight={"bold"} onClick={()=> dispatch({type:PRODUCTS_PAGE,payload:activePage-1})}>
          {"<"}
        </Button>
        <Button color="teal.500">{activePage}</Button>
        <Button isDisabled={activePage===totalPages} bgColor={"teal.500"} color="white" fontSize={"20px"} fontWeight={"bold"} onClick={()=> dispatch({type:PRODUCTS_PAGE,payload:activePage+1})}>{">"}</Button>
      </Flex>

        </Box>
      </HStack>
     
    </>
  );
};

export default Productpage;
