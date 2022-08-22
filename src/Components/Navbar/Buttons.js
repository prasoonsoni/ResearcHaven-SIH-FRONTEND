import React from "react";
import { HStack, Button, Show } from "@chakra-ui/react";
import { UserConsumer } from "../Contexts/userContext";
import ProfilePopover from "./ProfilePopover";
import { useLocation } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import Login from "../Home/Login"


function Buttons() {
  const token = sessionStorage.getItem("token");
  const location = useLocation();
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();

  return (
    <UserConsumer>
      {(props) => {
        return (
          <>
            <Show above="md">
              <HStack>
                {!token && !location.pathname.match('/dashboard+/') && (
                  <>
                    <Button
                      onClick={onLoginOpen}
                      mr={2}
                      colorScheme="red"
                    >
                      Login
                    </Button>
                    <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
                      <ModalOverlay />
                      <ModalContent bg="#171717">
                        <ModalCloseButton />
                        <ModalBody>
                          <Login show="" width="100%" />
                        </ModalBody>

                        <ModalFooter>
                          <Button colorScheme="blue" mr={3} onClick={onLoginClose}>
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
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
            {token && (
              <ProfilePopover />
            )}
          </>
        );
      }}
    </UserConsumer>
  );
}

export default Buttons;
