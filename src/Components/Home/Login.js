import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton
} from "@chakra-ui/react";
import ListItem from './ListItem';
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(true);
  const toast = useToast();
  const data = {
    email: "",
    password: "",
  };
  const myData = {...data};
  const handleSubmit = async (event) => {
    event.preventDefault();
    myData.email = email;
    myData.password = password;
    let url = "https://webcrawlers-sih.vercel.app/api/user/login";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myData),
      cache: "default",
    });
    let data = await response.json();
    console.log(data);
    if(data.success){
        toast({
            title: "Successful",
          description: "You have successfully logged in.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setIsLoading(false);
    }else{
        toast({
            title: "Error",
          description: data.message,
          status: "error",
          duration: 2000,
          isClosable: true,
        })
        if(!data.verfied&&data.verified!==undefined){
            setIsVerified(false);
        }
        setIsLoading(false);
    }
  };
  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };
  return (
    <Flex
      w="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="5xl" fontFamily="Poppins" mb={2}>
        Login
      </Text>
      <Flex
        p={4}
        bg="#D9D9D9"
        borderRadius="1rem"
        border="2px"
        borderColor="white"
        w="55%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <FormControl isRequired>
          <FormLabel color="black">Email address</FormLabel>
          <Input
            name="email"
            fontFamily="Roboto"
            bg="white"
            color="black"
            _focus={{ color: "black" }}
            value={email}
            placeholder="Enter your email address"
            _placeholder={{ color: "grey" }}
            type="email"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel color="black">Password</FormLabel>
          <Input
            name="password"
            fontFamily="Roboto"
            bg="white"
            color="black"
            _focus={{ color: "black" }}
            value={password}
            placeholder="Enter your password"
            _placeholder={{ color: "grey" }}
            type="password"
            onChange = {handleChange}
          />
        </FormControl>
      </Flex>
      <Button
        mt={4}
        bg="#395B64"
        color="white"
        _hover={{ backgroundColor: "#2096B6" }}
        isLoading={isLoading}
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      {!isVerified &&
      <Alert fontSize="12px" w='70%'mt={4} status='error'>
      <AlertIcon />
      <Box>
        <AlertTitle>Alert!</AlertTitle>
        <AlertDescription >
          Your account has not been verified. Please go through the link that we have sent to your mail to verify your account.<br/>
          <Button fontSize="12px" size='sm' mr={2}>Click Here to re-send the verification link.</Button>
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={()=>{setTimeout(setIsVerified(!isVerified),2000)}}
      />
    </Alert>}
    <ListItem/>
    <ListItem/>
    </Flex>
  );
}

export default Login;
