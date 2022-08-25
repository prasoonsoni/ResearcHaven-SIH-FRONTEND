import React, { useEffect } from "react";
import Intro from "./Intro";
import { Box } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HomeSVG from "./HomeSVG";

function Home(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      if(sessionStorage.getItem("type")==="admin"){
      navigate("/dashboard/admin");}
      else{
        navigate("/dashboard");
      }
    }
  });

  return (
    <Flex direction={{ base: "column", md: "row" }} align="center" >
      <Intro />
      <Box w="50%" p={4} m={5}>
        <HomeSVG />
      </Box>
    </Flex>
  );
}
export default Home;
