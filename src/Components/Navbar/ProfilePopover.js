import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Portal,
  Button,
  Avatar,
  Text,
} from "@chakra-ui/react";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserSkeleton from "./UserSkeleton";

function ProfilePopover() {
  const navigate = useNavigate();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
        console.log(data);
        setFirst(data.user.first_name);
        setLast(data.user.last_name);
        setEmail(data.user.email);
        setIsLoading(false);
      }
    };
    // sessionStorage.setItem('userObj',data);
    fetchData();
  }, []);
  const token = sessionStorage.getItem("token");
  if (isLoading) {
    return <UserSkeleton />;
  } else if (token) {
    return (
      <>
        <Popover _focus={{ outline: "none" }}>
          <PopoverTrigger>
            <Button
              _hover={{ bg: "none", outline: "none" }}
              bg="none"
              h="100%"
              p={2}
              outline="none"
            >
              <Profile first={first} last={last} />
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
              <PopoverArrow />
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
              <PopoverBody>
                <Button
                  w="100%"
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
      </>
    );
  }
}

export default ProfilePopover;
