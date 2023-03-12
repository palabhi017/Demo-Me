import React from "react";
import Logo from "../../Images/Logo1.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Image,
  Button,
  VStack,
  Text,
  MenuGroup,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Products/product.action";
import { PRODUCTS_PAGE } from "../../Redux/Products/product.type";

const SmallNavbar = () => {
  const dispatch = useDispatch();

  const handleCate = (category) => {
    const getProductsParam = {
      params: {
        category: category,
        
        // _sort: "",
        // _order: ""
      },
    };
    
    // dispatch(protypes(type));
   

    dispatch(getProducts(getProductsParam));
    dispatch({type:PRODUCTS_PAGE,payload:1})
  };

  return (
    <div>
      <Flex
        minWidth="max-content"
        bg={"#ffffff"}
        alignItems="center"
        shadow={"base"}
        justifyContent={"space-between"}
        p="10px"
      >
        <Box p="2" display={"flex"} justifyContent="center">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList fontSize={"14px"} zIndex="2000">
              <MenuItem>
                <Link to="/products"  onClick={() => {
              handleCate("women");
            }}> Women Ethnic</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products"> Women Western</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products"  onClick={() => {
              handleCate("men");
            }}>Men</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products"> Kids</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products"> Home & Kitchen</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products"  onClick={() => {
              handleCate("Beauty & Health");
            }}> Beauty & Health</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Image
          width="120px"
          height="40px"
          marginLeft="30px"
          objectFit="cover"
          src={Logo}
        />
        <Box>
          <Flex gap="10px">
            <Menu>
              <MenuButton>
                <BsPerson fontSize="25px" />
              </MenuButton>
              <MenuList zIndex={10000}>
                <MenuGroup title="Hello User" fontSize="19px" textAlign="left">
                  <VStack>
                    <Text fontSize="13px" textAlign="left">
                      To access your Meesho account
                    </Text>

                    <Button w="80%" h="45px">
                      <Link to="/login"> Login</Link>
                    </Button>
                    <Button w="80%" h="45px">
                      Admin{" "}
                    </Button>
                    <Button w="80%" h="45px" bg="#F43397" color="#fff">
                      <Link to="/signin"> Signup</Link>{" "}
                    </Button>
                  </VStack>
                </MenuGroup>
              </MenuList>
            </Menu>
            <Link href={"#"}>
              <Image
                // width="120px"
                height="28px"
                objectFit="cover"
                src="https://img.icons8.com/ios/50/null/hearts--v1.png"
              />
            </Link>
            <Link href={"#"}>
              <Image
                // width="120px"
                height="25px"
                objectFit="cover"
                src="https://img.icons8.com/external-obivous-color-kerismaker/48/null/external-cart-ecommerce-color-obivous-color-kerismaker.png"
              />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default SmallNavbar;
