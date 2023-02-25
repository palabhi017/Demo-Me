import React from "react";
import { Avatar } from "@chakra-ui/react";
import {
  MenuButton,
  MenuList,MenuGroup,
  VStack,
  Text,
  Button,
 } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_LOGOUT } from "../Redux/Auth/auth.types";







const Avatars = ({ name }) => {
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch({ type: AUTH_LOGOUT });
  };

  return (
    <>
      <MenuButton>
        <Avatar name={name} src="" />
      </MenuButton>

   

      <MenuList >

        <Button w="80%" h="45px">
          <Link to="/" onClick={() => handlelogout()}>
            Logout
          </Link>
        </Button>


        <Button mt="5px" w="80%" h="45px">
          <Link to="/order">My Orders</Link>
        </Button>

      </MenuList>
    </>
  );
};

export default Avatars;
