import React from "react";
import { HStack, Button, Show } from "@chakra-ui/react";
function Buttons(props) {
  return (
    <Show above="md">
      <HStack>
        <Button
          onClick={()=>{props.setShowLoginForm(true);props.setShowRegForm(false)}}
          mr={2}
          colorScheme="button"
        >
          Login
        </Button>
        <Button
          onClick={()=>{props.setShowLoginForm(false);props.setShowRegForm(true)}}
          colorScheme="blue"
          variant="outline"
        >
          Register
        </Button>
      </HStack>
    </Show>
  );
}

export default Buttons;
