import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, HStack, Button, Text, VStack, Heading } from "@chakra-ui/react";
import CartItems from "../Components/CartItems";
import { BsBagCheckFill } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { AUTH_SUCCESS } from "../Redux/Auth/auth.types";



const CartPage = () => {
 
 
  // const { totalprice } = useSelector((store: any) => store.authManager)
  const [total,settotal] = useState(0)
  const [cartdata, setcartdata] = useState([])
  // const { currentUser, isAuth } = useSelector(
  //   (store) => store.authManager
  // );
  const dispatch =  useDispatch()
  const userId = useSelector((state) => state.Auth.currentUser.id);
  const login = useSelector((state) => state.Auth.isAuth);
  

  const handletotal = ()=>{
    if(cartdata.length>0){
      let temp = cartdata
      let sum =0

        for(let i=0;i<temp.length;i++){
    
          sum+=temp[i].price*temp[i].quantity
          
        }
        
        settotal(sum)
        
    }
  
  }
  const getUserData = async () => {
    try {
      
      let r = await axios.get(`https://good-blue-giraffe-boot.cyclic.app/login/${userId}`);
      let d = r.data
      setcartdata(d.cart)
      dispatch({type:AUTH_SUCCESS,payload:d})
      handletotal()
    
    } catch (error) {
      console.log(error);
    }
    
  };

  const handledelete = async (orderId) => {
    try {
      let r = await axios.patch(`https://good-blue-giraffe-boot.cyclic.app/login/${userId}`, { cart: cartdata.filter((item) => item.orderId !== orderId) })
      
      setcartdata(r.data)
      getUserData()
      
     } catch (error) {
       console.log(error)
     }
   }
   const handlequant = async (orderId,num) => {
      
    let temp = cartdata
     

    for(let i=0;i<cartdata.length;i++){
   
      if(temp[i].orderId==orderId){
            temp[i].quantity+=num
        }
      }
  
  try {
    let r = await axios.patch(`https://good-blue-giraffe-boot.cyclic.app/login/${userId}`, { cart: temp })
    
    setcartdata(r.data)
    getUserData()
   } catch (error) {
     console.log(error)
   }
 }
  setTimeout(()=>{
  handletotal()
 },50)

  useEffect(() => {
    getUserData();
  }, []);
  



  // if (!isAuth) {
  //     // erroralert();
  //      // nav("/login");
  //  return <Heading>Please Login Now</Heading>
  
  //   // nav("/login");
  //   // return;
  // }else{

  // }
   
  
 

  return (

    <Box>
      <HStack h="60px" w="100%" p="10px 30px" justify="center" borderBottom={"2px solid #999"} alignItems="center">
        <Box ><BsBagCheckFill style={{ color: "#161636" }} size="35px" /></Box>
        <Text color="#161636" fontWeight={"bold"} fontSize="20px">SHOPING BAG</Text>

      </HStack>

      <HStack justifyContent={"space-between"} p="10px 30px" mt="20px" w="100%" h="auto" alignItems={"top"}>
        <Grid w="60%" h="auto" p="10px 40px" templateColumns={"repeat(3,30%)"} gap="40px"  >
          {cartdata && cartdata.length >0 && cartdata.map((e) => <CartItems objProp={e} funcProp={handledelete} funcquant={handlequant} />)}

        </Grid>
        <VStack borderRadius={"5px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"   border="1px solid #161636" gap="20px" h="200px" w="30%">
          <Text color="#161636" fontWeight={"bold"} fontSize="20px" mt="10%">Total price :- {"    "}{total} </Text>
        {cartdata.length>0? <Link to="/payment"> <Button  bgColor="#161636" w="70%" color="white"><BiLockAlt size="20px" />CHECKOUT</Button></Link>:<Heading>Cart is Empty</Heading>}  
        </VStack>
      </HStack>

    </Box>
  )
};

export default CartPage;
