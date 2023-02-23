import { CiSearch } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineMobile } from "react-icons/ai";
import Logo from "../../Images/Logo1.png";
import {
  Dropdown,
  Dropdown1,
  Dropdown2,
  Dropdown4,
  Dropdown5,
  Dropdown6,
  Dropdown7,
  Dropdown8,
  Dropdown3,
} from "./Dropdown";
import {
  Flex,
  Spacer,
  Box,
  Image,
  Center,
  ButtonGroup,
  Button,
  InputLeftElement,
  InputGroup,
  Input,
  Tooltip,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  VStack,
} from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className={styles.download}>
      <h1>Download from</h1>
      <Image
        width="200px"
        src="	https://images.meesho.com/images/pow/playstore-icon-big.png"
      />
      <Image
        width="200px"
        src="https://images.meesho.com/images/pow/appstore-icon-big.png"
      />
    </div>
  );
};

const Navbar = ({ display = "flex" }) => {
  const [dropdown, setdropdown] = useState(false);
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const [dropdown3, setdropdown3] = useState(false);
  const [dropdown4, setdropdown4] = useState(false);
  const [dropdown5, setdropdown5] = useState(false);
  const [dropdown6, setdropdown6] = useState(false);
  const [dropdown7, setdropdown7] = useState(false);
  const [dropdown8, setdropdown8] = useState(false);

  return (
    <div>
      <nav className={styles.nav_1}>
        <Flex bg={"#ffffff"} alignItems="center" gap="2" p={1}>
          <Link to="/">
            <Image width="158px" height="56px" src={Logo} marginLeft="20px" />
          </Link>
          <Box p="2" display={"flex"}>
            <InputGroup marginLeft={"20px"}>
              <InputLeftElement
                pointerEvents="none"
                children={<CiSearch color="gray.300" />}
              />
              <Input
                width={"400px"}
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
              />
            </InputGroup>
          </Box>

          <Spacer />

          <ButtonGroup gap="5" cursor="pointer" className={styles.rightside}>
            <Tooltip label={<Profile />}>
              <Flex>
                <Center>
                  <AiOutlineMobile />
                </Center>{" "}
                <Text>Download App </Text>{" "}
              </Flex>
            </Tooltip>{" "}
            <div className={styles.border}></div>
            <Text>Become a Supplier</Text> <div className={styles.border}></div>
            {/* Profile */}
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Flex>
                  <Center>
                    <MdManageAccounts />
                  </Center>
                  Profile
                </Flex>
              </MenuButton>
            </Menu> */}
            <Menu>
              <Flex direction="column" alignItems="center">
                <BsPerson fontSize="25px" />
                <MenuButton>Profile</MenuButton>
                <MenuList pb="10px">
                  <MenuGroup
                    title="Hello User"
                    fontSize="19px"
                    textAlign="left"
                  >
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
              </Flex>
            </Menu>
            <Menu>
              <MenuButton>
                <Flex direction="column" alignItems="center">
                  <AiOutlineShoppingCart fontSize="25px" />
                  <Text>Cart</Text>
                </Flex>
              </MenuButton>
            </Menu>
          </ButtonGroup>
        </Flex>
      </nav>
      <nav className={styles.nav_2}>
        <Flex
          maxWidth="100%"
          alignItems="center"
          gap="10"
          justify={"center"}
          fontWeight={"semibold"}
          display={display}
        >
          <Text
            onMouseEnter={() => setdropdown(true)}
            onMouseLeave={() => setdropdown(false)}
          >
            Women Ethnic
          </Text>

          <Text
            onMouseEnter={() => setdropdown1(true)}
            onMouseLeave={() => setdropdown1(false)}
          >
            Women Western
          </Text>
          <Text
            onMouseEnter={() => setdropdown2(true)}
            onMouseLeave={() => setdropdown2(false)}
          >
            Men
          </Text>
          <Text
            onMouseEnter={() => setdropdown3(true)}
            onMouseLeave={() => setdropdown3(false)}
          >
            Kids
          </Text>
          <Text
            onMouseEnter={() => setdropdown4(true)}
            onMouseLeave={() => setdropdown4(false)}
          >
            Home & Kitchen
          </Text>
          <Text
            onMouseEnter={() => setdropdown5(true)}
            onMouseLeave={() => setdropdown5(false)}
          >
            Beauty & Health
          </Text>
          <Text
            onMouseEnter={() => setdropdown6(true)}
            onMouseLeave={() => setdropdown6(false)}
          >
            {" "}
            Jewellery & Accessories
          </Text>
          <Text
            onMouseEnter={() => setdropdown7(true)}
            onMouseLeave={() => setdropdown7(false)}
          >
            Bags & Footwear
          </Text>

          <Text
            onMouseEnter={() => setdropdown8(true)}
            onMouseLeave={() => setdropdown8(false)}
          >
            Electronics
          </Text>
        </Flex>
      </nav>
      {dropdown ? <Dropdown setdropdown={setdropdown} /> : null}
      {dropdown1 ? <Dropdown1 setdropdown1={setdropdown1} /> : null}
      {dropdown2 ? <Dropdown2 setdropdown2={setdropdown2} /> : null}
      {dropdown3 ? <Dropdown3 setdropdown3={setdropdown3} /> : null}
      {dropdown4 ? <Dropdown4 setdropdown4={setdropdown4} /> : null}
      {dropdown5 ? <Dropdown5 setdropdown5={setdropdown5} /> : null}
      {dropdown6 ? <Dropdown6 setdropdown6={setdropdown6} /> : null}
      {dropdown7 ? <Dropdown7 setdropdown7={setdropdown7} /> : null}
      {dropdown8 ? <Dropdown8 setdropdown8={setdropdown8} /> : null}
    </div>
  );
};

export default Navbar;
