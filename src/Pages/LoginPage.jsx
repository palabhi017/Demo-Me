import React from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import "../CSS/LoginCss.css";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const initialState = {
  email: "",

  password: "",
};

export default function LoginPage() {
  const [val, setVal] = React.useState(initialState);
  const [submitButtonDisable, setSubmitButtonDisable] = React.useState(false);
  const [err, setErr] = React.useState("");
  // const toast = useToast();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitButtonDisable(true);
    if (val.email && val.password && val.name) {
      signInWithEmailAndPassword(auth, val.email, val.password)
        .then(async (res) => {
          setSubmitButtonDisable(false);

          navigate("/");
        })
        .catch((err) => {
          console.log("err", err);
          setErr(err.message);
        });
    } else {
      //Toast use karunga mai
      alert("please fill all data");
    }
  };

  return (
    <Stack
      className="Login_Page"
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={handleChange}
              name="email"
              value={val.email}
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
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Text>{err}</Text>
            <Button
              disabled={submitButtonDisable}
              colorScheme={"blue"}
              variant={"solid"}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          w="50%"
          // objectFit={"cover"}
          // boxShadow={
          //   " inset 20px 20px 2px #862b2b,inset -20px -20px 2px #b63b3b"
          // }
          zIndex={"2"}
          className="Login_Image"
          src={
            "https://user-images.githubusercontent.com/106021674/220345883-a1f97b29-a8ec-447e-98ca-d0d37ae3c279.png"
          }
        />
      </Flex>
    </Stack>
  );
}
