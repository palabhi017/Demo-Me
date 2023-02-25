import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useToast } from "@chakra-ui/react";
import "../../CSS/AdminLoginPage.css";
const initialState = {
  email: "",
  password: "",
};

export default function LoginAdmin() {
  const [val, setVal] = React.useState(initialState);
  // const [text, setText] = React.useState(false);
  const navigate = useNavigate();
  const handleToast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  console.log("val", val);

  const handleSubmit = async () => {
    // setText(false);
    if (val.password === "citySlicka") {
      try {
        let res = await axios.post("https://reqres.in/api/login", val);
        console.log(res.data.token);
        // setText(true);
        navigate("/AdminDashboard");
        handleToast({
          position: "top-right",
          title: "Hello Admin Welcome back",
          description: "Now You can do your work.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } catch (err) {
        console.log(err);
        // setText(false);
        // setText(false);
        handleToast({
          position: "top-right",
          description: "Please Check your id and password",
          title: "Wrong Credential",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } else {
      handleToast({
        position: "top-right",
        description: "Please Check your password",
        title: "Wrong Credential",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    setVal(initialState);
  };

  // if (text === true) {
  //   console.log("helllo");
  //   navigate("/AdminDashboard");
  // }

  return (
    <Box>
      <Text>Welcome</Text>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        className="AdminLoginPage"
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={val.name}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={handleChange}
                  name="password"
                  value={val.password}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>

                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <ToastContainer />
    </Box>
  );
}
