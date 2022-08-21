import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button,
  Avatar,
  Text,
  Box,
  DarkMode,
} from "@chakra-ui/react";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserSkeleton from "./UserSkeleton";
import { useToken } from "../Hooks/useToken";
function ProfilePopover() {
  const navigate = useNavigate();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    setIsLoading(true);
    let fetchData = async () => {
      let url = "https://webcrawlers-sih.vercel.app/api/user/";
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("token"),
        },
        cache: "default",
      });
      let data = await response.json();
      if (data.success) {
        sessionStorage.setItem("userObj", data);
        setFirst(data.user.first_name);
        setLast(data.user.last_name);
        setEmail(data.user.email);
        setIsLoading(false);
      }
    };
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    // sessionStorage.setItem('userObj',data);
    fetchData();
  }, []);
  const token = useToken();
  if (isLoading) {
    return <UserSkeleton />;
  } else if (token) {
    return (
      <Box>
        <DarkMode>
          <Popover _focus={{ outline: "none" }}>
            {(screenWidth > "1040") && (
              <Button
                mr={4}
                onClick={(open) => {
                  navigate("/");
                }}
              >
                Go To Dashboard
              </Button>
            )}
            <PopoverTrigger
              boxShadow="none"
              bg="none"
              _hover={{ bg: "none", outline: "none", boxShadow: "none" }}
            >
              <Button
                _hover={{ background: "none" }}
                _focus={{ bg: "none", outline: "none", boxShadow: "none" }}
                bg="none"
                h="100%"
                p={2}
              >
                <Profile first={first} last={last} />
              </Button>
            </PopoverTrigger>
            <Portal h="100%" bg="none" p={2}>
              <PopoverContent _focus={{ outline: "none", boxShadow: "none" }}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader
                  h="250px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  gap={4}
                  w="100%"
                >
                  <Avatar size="xl" name={first + " " + last} />
                  <Text>
                    {first} {last}
                  </Text>
                  <Text>{email}</Text>
                </PopoverHeader>
                <PopoverBody
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {(screenWidth < "1040")&&
                    <Button
                      mr={4}
                      onClick={(open) => {
                        navigate("/");
                      }}
                    >Go To Dashboard</Button>
                  }
                  <Button
                    w="50%"
                    onClick={() => {
                      sessionStorage.clear();
                      navigate("/");
                    }}
                  >
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </DarkMode>
      </Box>
    );
  }
}

export default ProfilePopover;
