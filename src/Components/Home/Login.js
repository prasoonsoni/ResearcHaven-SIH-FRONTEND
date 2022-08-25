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
  CloseButton,
  Show,
  InputRightElement,
  InputGroup,
  ButtonGroup
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(true);
  const [show1, setShow1] = React.useState(false)
  const toast = useToast();
  const navigate = useNavigate();
  const data = {
    email: "",
    password: "",
  };
  const myData = { ...data };
  const handleClick1 = () => setShow1(!show1)

  // on submitting form
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    if (email === "" || password === "") {
      toast({
        title: "Fields should not be Empty.",
        description: "Please fill all the details correctly",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      setIsLoading(false);
    } else {
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
      if (data.success) {
        console.log(data);
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("type",data.type);
        if(data.type==="admin"){
          navigate("/dashboard/admin");
        }else{
        navigate("/dashboard");}
        toast({
          title: "Successful",
          description: "You have successfully logged in.",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
        
        setIsLoading(false);
      } else {
        toast({
          title: "Error",
          description: data.message,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        if (!data.verfied && data.verified !== undefined) {
          setIsVerified(false);
        }
        setIsLoading(false);
      }
    }
  };

  // on changing form values
  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <Show above={props.show}>
      <Flex
        w="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="4xl" fontFamily="Poppins" mt={2}>
          Login 
        </Text>
        <Flex
          p={4}
          w={props.width}
          direction="column"
          alignItems="center"
          justifyContent="center"
          zIndex="0"
        >
          <FormControl isRequired>
            <FormLabel color="white">Email address</FormLabel>
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
              zIndex="0"
            />
          </FormControl>
          <FormControl mt={4} mb={4} isRequired>
            <FormLabel color="white">Password</FormLabel>
            <InputGroup size='md'>
              <Input
                name="password"
                fontFamily="Roboto"
                bg="white"
                color="black"
                _focus={{ color: "black" }}
                value={password}
                placeholder="Enter your password"
                _placeholder={{ color: "grey" }}
                type={show1 ? 'text' : 'password'}
                onChange={handleChange}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick1} color='black' bg="#EDF2F7" _hover={{ backgroundColor: "" }}>
                  {show1 ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Flex>
        <ButtonGroup>
          <Button
            colorScheme='blue'
            mr={3}
            fontStyle='extra-bold'
            isLoading={isLoading}
            loadingText="Logging In..."
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </ButtonGroup>
        {!isVerified && (
          <Alert fontSize="12px" w="100%" m={4} status="error">
            <AlertIcon />
            <Box>
              <AlertTitle>Alert!</AlertTitle>
              <AlertDescription>
                Your account has not been verified. Please go through the link
                that we have sent to your mail to verify your account.
                <br />
                <Button fontSize="12px" size="sm" mr={2}>
                  Click Here to re-send the verification link.
                </Button>
              </AlertDescription>
            </Box>
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              colorScheme='blue'
              mr={3}
              fontStyle='bold'
              onClick={() => {
                setTimeout(setIsVerified(!isVerified), 2000);
              }}
            />
          </Alert>
        )}
      </Flex>
    </Show>
  );
}

export default Login;
