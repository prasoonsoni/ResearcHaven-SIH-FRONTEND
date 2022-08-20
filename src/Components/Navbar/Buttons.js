import React from "react";
import { HStack, Button, Show } from "@chakra-ui/react";
import { UserConsumer } from "../Contexts/userContext";
import ProfilePopover from "./ProfilePopover";
import { useLocation } from "react-router-dom";
function Buttons() {
  const token = sessionStorage.getItem("token");
  const location = useLocation();
  return (
    <UserConsumer>
      {(props) => {
        return (
          <>
            <Show above="md">
              <HStack>
                {!token && location.pathname!=='/dashboard' && (
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
              </HStack>
            </Show>
            {token && location.pathname==='/dashboard' && (
              <ProfilePopover/>
            )}
          </>
        );
      }}
    </UserConsumer>
  );
}

export default Buttons;
