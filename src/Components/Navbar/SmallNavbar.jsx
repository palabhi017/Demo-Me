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
            <MenuList fontSize={"14px"} zIndex="2000">
              <MenuItem>
                <Link href={"#"}> Women Ethnic</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"#"}> Women Western</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"#"}>Men</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"#"}> Kids</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"#"}> Home & Kitchen</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"#"}> Beauty & Health</Link>
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
