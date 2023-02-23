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
  
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

const SmallNavbar = () => {

 

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
            <MenuList fontSize={"14px"}>
              <MenuItem >
                <Link to=""> Women Ethnic</Link>
              </MenuItem>
              <MenuItem>
                <Link to=""> Women Western</Link>
              </MenuItem>
              <MenuItem>
                <a href={"#"}>Men</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}> Kids</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}> Home & Kitchen</a>
              </MenuItem>
              <MenuItem>
                <a href={"#"}> Beauty & Health</a>
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
            <a href={"#"}>
              <Image
                // width="120px"
                height="28px"
                objectFit="cover"
                src="https://img.icons8.com/ios/50/null/hearts--v1.png"
              />
            </a>
            <a href={"#"}>
              <Image
                // width="120px"
                height="25px"
                objectFit="cover"
                src="https://img.icons8.com/external-obivous-color-kerismaker/48/null/external-cart-ecommerce-color-obivous-color-kerismaker.png"
              />
            </a>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default SmallNavbar;
