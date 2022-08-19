import { Flex, Text, Show, HStack, Button } from "@chakra-ui/react";
import { UserConsumer } from "../Contexts/userContext";
import React from "react";
import SihLogo from "./SihLogo";
import WebCrawler from "./WebCrawler";
function Intro() {
  return (
    <UserConsumer>
      {(props) => {
        return (
          <Flex
            mt={4}
            p={4}
            gap="2rem"
            w="100%"
            h="80vh"
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <SihLogo />
            <Text
              textAlign="center"
              fontFamily="Roboto"
              fontWeight="900"
              fontSize={{ base: "2xl", lg: "3xl" }}
            >
              for SIH 2022
            </Text>
            <Text
              textAlign="center"
              fontFamily="Rubik"
              fontWeight="800"
              fontSize={{ base: "4xl", lg: "6xl" }}
            >
              PLAGIARISM CHECKER
            </Text>
            <WebCrawler />
            <Text
              textAlign="center"
              fontFamily="Poppins"
              fontWeight="500"
              fontSize={{ base: "2xl", lg: "3xl" }}
            >
              a{" "}
              <u>
                <span style={{ letterSpacing: "0.3rem" }}>webCrawling</span>
              </u>{" "}
              project
            </Text>
            <Show below="md">
              <HStack>
                <Button
                  onClick={() => {
                    props.setShowLoginForm(true);
                    props.setShowRegForm(false);
                    window.scrollBy(0, 1000);
                  }}
                  mr={2}
                  colorScheme="button"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    props.setShowLoginForm(false);
                    props.setShowRegForm(true);
                    window.scrollBy(0, 2000);
                  }}
                  colorScheme="blue"
                  variant="outline"
                >
                  Register
                </Button>
              </HStack>
            </Show>
          </Flex>
        );
      }}
    </UserConsumer>
  );
}

export default Intro;
