import React from "react";
import AdminNavbar from "./AdminNavbar";
import { useSelector, useDispatch } from "react-redux";
import { getAdminData } from "../../Redux/Admin/admin.action";
import { Box, ButtonGroup, Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Text,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import "../../CSS/AdminLoginPage.css";
const AdminDash = () => {
  const [total, setTotal] = React.useState(0);

  const state = useSelector((store) => store.adminReducer);
  const val = state.data.data;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAdminData());
    setTotal(val.reduce((acc, el) => acc + el.price, 0));
  }, []);

  return (
    <div>
      <AdminNavbar />
      <Divider />
      <Divider />
      <Divider />
      <Box
        style={{
          height: "20px",
          width: "30%",
          margin: "auto",
        }}
      >
        <Flex
          style={{
            gap: "90px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <ButtonGroup>
            <Button colorScheme="pink">
              Total Products :
              {state.data.data && state.data.data.length
                ? state.data.data.length
                : 0}
            </Button>
            <Menu>
              <MenuButton
                px={9}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "rgb(153, 153, 153).400" }}
                _expanded={{ bg: "rgb(153, 153, 153).400" }}
                _focus={{ boxShadow: "outline" }}
              >
                File <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Men</MenuItem>
                <MenuItem>Women</MenuItem>
                <MenuDivider />
                <MenuItem>Cosmatics</MenuItem>
                <MenuItem>Jewellery and Accessories</MenuItem>
                <MenuItem>FootWear</MenuItem>
              </MenuList>
            </Menu>
            <Button colorScheme="pink">Total Inventory : ₹{total}</Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "80%",
          margin: "auto",
          gap: "30px",
          border: "14px",
        }}
      >
        {state.data.data &&
          state.data.data.reverse().map((el) => {
            return (
              <Card maxW="sm" className="media_change">
                <CardBody>
                  <Image src={el.image} alt={el.title} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{el.category}</Heading>
                    <Text
                      fontSize={"2xl"}
                      style={{
                        color: " rgb(153, 153, 153)",
                        fontWeight: "400",
                        fontFamily: "Mier book",
                      }}
                    >
                      {el.title}
                    </Text>
                    <Text
                      style={{ fontWeight: "700" }}
                      color="rgb(51, 51, 51)"
                      fontSize="2xl"
                    >
                      Price ₹{el.price}
                    </Text>

                    <Text color="blue.600" fontSize="2xl">
                      <span style={{ fontWeight: "700" }}>Tag</span> {el.tag}
                    </Text>
                    <Flex
                      style={{ gap: "20px", justifyContent: "space-evenly" }}
                    >
                      <Text color="blue.600" fontSize="2xl">
                        {el.reviews}
                      </Text>

                      <Button
                        style={{ border: "18px 12px" }}
                        bg={"rgb(244, 51, 151)"}
                        className="btn_Hover"
                      >
                        <Text color="#ffff" fontSize="2xl">
                          {el.rating}
                        </Text>
                      </Button>
                    </Flex>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      bg={"rgb(244, 51, 151)"}
                      color={"#ffff"}
                      className="btn_Hover"
                    >
                      Delete
                    </Button>

                    <Button
                      variant="solid"
                      bg={"rgb(244, 51, 151)"}
                      color={"#ffff"}
                      className="btn_Hover"
                    >
                      Update
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
      </Box>
    </div>
  );
};

export default AdminDash;
