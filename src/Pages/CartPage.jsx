import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Grid,
  HStack,
  Button,
  Text,
  VStack,
  Heading,
  Select,
  Input,
  Divider,
  Stack,
} from "@chakra-ui/react";
import CartItems from "../Components/CartItems";
import { BsBagCheckFill } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { AUTH_SUCCESS } from "../Redux/Auth/auth.types";
import { TOTAL_PRICE } from "../Redux/Products/product.type";

const CartPage = () => {
  // const { totalprice } = useSelector((store: any) => store.authManager)
  // const [total, settotal] = useState(0);
  const [cartdata, setcartdata] = useState([]);
  // const { currentUser, isAuth } = useSelector(
  //   (store) => store.authManager
  // );
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.Auth.currentUser.id);
  const login = useSelector((state) => state.Auth.isAuth);
  const total = useSelector((state) => state.productReducer.totalPrice);

  const handletotal = () => {
    if (cartdata) {
    
      let temp = cartdata;
      let sum = 0;
      
      for (let i = 0; i < temp.length; i++) {
        sum += temp[i].price * temp[i].quantity;
      }
      
      dispatch({type:TOTAL_PRICE,payload:sum})
      // settotal(sum);
    }
  
  };
  const getUserData = async () => {
    try {
      let r = await axios.get(`https://onestoredata.onrender.com/login/${userId}`);
      let d = r.data;
      setcartdata(d.cart);
      dispatch({ type: AUTH_SUCCESS, payload: d });
      
      handletotal()
    } catch (error) {
      console.log(error);
    }
  };

  const handledelete = async (orderId) => {
    try {
      let r = await axios.patch(`https://onestoredata.onrender.com/login/${userId}`, {
        cart: cartdata.filter((item) => item.orderId !== orderId),
      });

      setcartdata(r.data);
      getUserData();
      
    } catch (error) {
      console.log(error);
    }
  };
  const handlequant = async (orderId, num) => {
    let temp = cartdata;

    for (let i = 0; i < cartdata.length; i++) {
      if (temp[i].orderId == orderId) {
        temp[i].quantity += num;
      }
    }

    try {
      let r = await axios.patch(`https://onestoredata.onrender.com/login/${userId}`, {
        cart: temp,
      });

      setcartdata(r.data);
      getUserData();
    } catch (error) {
      console.log(error);
    }
  };
const handleDeliveryType =(value)=>{
console.log(value)
}

  setTimeout(() => {
    handletotal();
  }, 100);

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
    <Box >
      
      {/* <HStack
        h="60px"
        w="100%"
        p="0px 30px"
        justify="center"
        borderBottom={"2px solid #999"}
        alignItems="center"
      >
        <Box>
          <BsBagCheckFill style={{ color: "#161636" }} size="35px" />
        </Box>
        <Text color="#161636" fontWeight={"bold"} fontSize="20px">
          SHOPING BAG
        </Text>
      </HStack> */}
      
      <Stack
        // justifyContent={"space-between"}
        direction={['column','row']}
        p="0px"
        // mt="20px"
        w="100%"
        h="auto"
        
        // alignItems={"top"}
      >
        <Box      
           w={{base:"100%",md:"50%",lg:"70%"}}
          h="auto"
          p="0px 30px"
          >
        <HStack justifyContent={"space-between"} w="100%" borderBottom="1px solid #999" p="10px 30px" m="auto">
          <Text fontSize={{base:"20px",md:"20px",lg:"25px"}} fontWeight="bold">Shopping Cart</Text>
          <Text fontSize={"20px"} fontWeight="bold">{cartdata? cartdata.length+ " Items": "0 Items"}</Text>
        </HStack>
        <Grid

          p="10px 40px"
          templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fe)",lg:"repeat(3,1fr)"}}
          gap="40px"
        >
          {cartdata &&
            cartdata.length > 0 &&
            cartdata.map((e) => (
              <CartItems
                objProp={e}
                funcProp={handledelete}
                funcquant={handlequant}
              />
            ))}
        </Grid>
        </Box>
        <Box
         h="500px"
          w={{base:"100%",md:"50%",lg:"30%"}}
          bgColor={"#f5f5f6"}
          p="0px 30px"
          // alignItems={"left"}
        >
          {/* <Text color="#161636" fontWeight={"bold"} fontSize="20px" mt="10%">
            Total price :- {"    "}
            {total}{" "}
          </Text>
          {cartdata.length > 0 ? (
            <Link to="/payment">
              {" "}
              <Button bgColor="#161636" w="70%" color="white">
                <BiLockAlt size="20px" />
                CHECKOUT
              </Button>
            </Link>
          ) : (
            <Heading>Cart is Empty</Heading>
          )} */}
          <HStack w="100%" borderBottom="1px solid #999" p="10px 20px" m="auto">
          <Text fontSize={"25px"} fontWeight="bold">Order Summary</Text>
          </HStack>
          <HStack w="100%" justifyContent={"space-between"} mt="20px" p="10px 10px" m="auto">
          <Text fontSize={"17px"} fontWeight="600">{cartdata? "ITEMS "+ cartdata.length: "0 Items"}</Text>
          <Text fontSize={"17px"} fontWeight="600">₹{total>0 && total}</Text>
          </HStack>
          <HStack w="100%" p="10px 10px" m="auto">
          <Text fontSize={"17px"} fontWeight="600">SHIPPING</Text>
          </HStack>
          <Select placeholder='Delivery Type' size="sm" bgColor="white" onChange={handleDeliveryType}>
             {/* <option value='Standard'>Standard Delivery -$50</option> */}
             <option value='Normal'>Normal Delivery -₹0</option>
             <option value='Standard'>Standard Delivery -₹50</option>

          </Select>
          <HStack w="100%" p="10px 10px" m="auto">
          <Text fontSize={"17px"} fontWeight="600">PROMO CODE</Text>
          </HStack>
          <Input placeholder="Enter Your Code" bgColor="white"></Input>
          <Button bgColor="pink.400" mt="20px" alignSelf={"left"} color="white">Apply</Button>
          <Divider mt="20px" />
          <HStack w="100%" justifyContent={"space-between"} mt="20px" p="10px 10px" m="auto">
          <Text fontSize={"17px"} fontWeight="600">TOTAL COST</Text>
          <Text fontSize={"17px"} fontWeight="600">₹{total>0 && total}</Text>
          </HStack>
          <Link to="/payment"><Button w="100%" isDisabled={cartdata.length===0} bgColor="teal.500" color="white">CHECKOUT</Button></Link> 
        </Box>
      </Stack>
    </Box>
  );
};

export default CartPage;
