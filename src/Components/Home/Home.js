import React, { useEffect } from "react";
import Intro from "./Intro";
import FormComponent from "./FormComponent";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  });

  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Intro
        showLoginForm={props.showLoginForm}
        setShowRegForm={props.setShowRegForm}
        setShowLoginForm={props.setShowLoginForm}
        showRegForm={props.showRegForm}
      />

      <FormComponent
        showLoginForm={props.showLoginForm}
        setShowRegForm={props.setShowRegForm}
        setShowLoginForm={props.setShowLoginForm}
        showRegForm={props.showRegForm}
      />
    </Flex>
  );
}
export default Home;
