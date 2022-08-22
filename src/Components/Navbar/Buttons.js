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
import Register from "../Home/Register"
import NavLinks from "./NavLinks";


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
              <HStack spacing={5}>
                <NavLinks />
                {!token && !location.pathname.match('/dashboard+/') && (
                  <>
                    {/* Login button */}
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
                        
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    {/* Register button */}
                    <Button
                      mr={2}
                      onClick={onRegisterOpen}
                      colorScheme="messenger"
                    >
                      Register
                    </Button>
                    <Modal
                      bg="#000"
                      w="100%"
                      isOpen={isRegisterOpen}
                      onClose={onRegisterClose}
                    >
                      <ModalOverlay />
                      <ModalContent bg="#171717">
                        <ModalCloseButton />
                        <ModalBody>
                          <Register show="" width="100%" />
                        </ModalBody>

                        <ModalFooter>
                          
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

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
