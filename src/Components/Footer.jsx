import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import "../CSS/ButtonFile.css";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      className="Footer_part"
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"9xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Text fontSize={"4xl"} fontWeight={"700"}>
            Shop on Meesho
          </Text>
          <Stack align={"flex-start"}>
            <ListHeader fontSize={"3xl"}>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Careers Become a Supplier</Link>
            <Link href={"#"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader fontSize={"3xl"}>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Hall of Fame</Link>
            <Link href={"#"}>Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader fontSize={"3xl"}>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Meesho Tech Blog</Link>
            <Link href={"#"}>Notice and Returns</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader fontSize={"3xl"}>Install App</ListHeader>
            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply">
              {" "}
              <Image
                objectFit="cover"
                src="https://images.meesho.com/images/pow/playstore-icon-big.png"
              />
            </a>
            <a href="https://apps.apple.com/in/app/meesho-online-shopping/id1457958492">
              {" "}
              <Image
                objectFit="cover"
                src="https://images.meesho.com/images/pow/appstore-icon-big.png"
              />
            </a>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>
            © 2022{" "}
            <span style={{ color: "hsla(303,100%,50%,1)" }}>Meesho.com</span>.
            All rights reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Linkedin"} href={"#"}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
