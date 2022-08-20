import React from "react";
import { HStack, Button, Show } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserConsumer } from "../Contexts/userContext";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Portal,
} from "@chakra-ui/react";
import Profile from "./Profile";
function Buttons() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  return (
    <UserConsumer>
      {(props) => {
        return (
          <Show above="md">
            <HStack>
              {!token && (
                <>
                  <Button
                    onClick={() => {
                      props.setShowLoginForm(true);
                      props.setShowRegForm(false);
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
                    }}
                    colorScheme="blue"
                    variant="solid"
                  >
                    Register
                  </Button>
                </>
              )}
              {token && (
                <Popover _focus={{ outline: "none" }}>
                  <PopoverTrigger>
                    <Button
                      _hover={{ bg: "none", outline: "none" }}
                      bg="none"
                      h="100%"
                      p={2}
                      outline="none"
                    >
                      <Profile />
                    </Button>
                  </PopoverTrigger>
                  <Portal
                    _hover={{ bg: "none", outline: "none" }}
                    bg="none"
                    h="100%"
                    p={2}
                    outline="none"
                  >
                    <PopoverContent>
                      <PopoverArrow/>
                      <PopoverHeader h="500px" display="flex" alignItems="center" justifyContent="center" w="100%">Header</PopoverHeader>
                      
                      <PopoverBody display="flex" alignItems="center" justifyContent="center">
                        <Button w="100%" onClick={()=>{sessionStorage.clear();navigate('/');}}>Logout</Button>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              )}
            </HStack>
          </Show>
        );
      }}
    </UserConsumer>
  );
}

export default Buttons;
