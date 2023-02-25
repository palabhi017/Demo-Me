import React from 'react'
import { useSelector } from 'react-redux'
import Ordercard from "../Components/Ordercard"
import {Grid, Heading} from "@chakra-ui/react"
const Orders = () => {
    const orders = useSelector((state)=> state.Auth.currentUser.order)
  return (
    <>
    <Heading>Your Orders</Heading>
    <Grid w="90%" m="auto" h="auto" p="10px 40px" templateColumns={"repeat(3,30%)"} gap="40px"  >
    {orders && orders.map((e)=> <Ordercard {...e} />)}
    </Grid>
    </>
  )
}

export default Orders