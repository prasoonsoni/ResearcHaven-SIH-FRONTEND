import React from "react";
import { HStack, Button, Show } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Buttons(props) {
  const navigate = useNavigate()
  const token = sessionStorage.getItem("token");
  return (
    <Show above="md">
      <HStack>
        {!token &&
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
              variant="outline"
            >
              Register
            </Button>
          </>
        }
        {token && <>
          <Button
            onClick={() => {
              sessionStorage.clear()
              navigate('/')
            }}
            colorScheme="red"
            variant="outline"
          >
            Logout
          </Button>
        </>}
      </HStack>
    </Show>
  );
}

export default Buttons;
