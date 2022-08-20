import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Register(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [cpass, setCpass] = React.useState("");
  const toast = useToast();

  const data = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const myData = { ...data };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (email === "" || pass === "" || first===''||last==='') {
      toast({
        title: "Fields should not be Empty.",
        description: "Please fill all the details correctly",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      setIsSubmitting(false);
    } else {
      // set data
      myData["first_name"] = first;
      myData["last_name"] = last;
      myData["email"] = email;
      myData["password"] = pass;
      // check if passwords are same or not
      if (cpass !== pass) {
        toast({
          title: "Passwords do not match",
          description: "Both the passwords should match.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        setIsSubmitting(false);
      } else {
        let url = "https://webcrawlers-sih.vercel.app/api/user/create";
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
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setIsSubmitting(false);
        } else {
          toast({
            title: "Error",
            description: data.message,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
          setIsSubmitting(false);
        }
      }
    }
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    let name = event.target.name;
    if (name === "first") {
      setFirst(event.target.value);
    } else if (name === "last") {
      setLast(event.target.value);
    } else if (name === "email") {
      setEmail(event.target.value);
    } else if (name === "pass") {
      setPass(event.target.value);
    } else if (name === "cpass") {
      setCpass(event.target.value);
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
        Register
      </Text>
      <Flex
        p={4}
        bg="#D9D9D9"
        borderRadius="1rem"
        border="2px"
        borderColor="white"
        w={props.width}
        direction="column"
        // alignItems="center"
        justifyContent="center"
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel color="black">First name</FormLabel>
            <Input
              name="first"
              fontFamily="Roboto"
              bg="white"
              color="black"
              _focus={{ color: "black" }}
              value={first}
              onChange={handleChange}
              placeholder="First name"
              _placeholder={{ color: "grey" }}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel color="black">Last name</FormLabel>
            <Input
              name="last"
              fontFamily="Roboto"
              bg="white"
              color="black"
              _focus={{ color: "black" }}
              value={last}
              onChange={handleChange}
              placeholder="Last name"
              _placeholder={{ color: "grey" }}
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel color="black">Email address</FormLabel>
            <Input
              name="email"
              fontFamily="Roboto"
              bg="white"
              color="black"
              _focus={{ color: "black" }}
              value={email}
              onChange={handleChange}
              placeholder="Enter your email address"
              _placeholder={{ color: "grey" }}
              type="email"
            />
            <FormHelperText color="grey">
              We'll never share your email.
            </FormHelperText>
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel color="black">Password</FormLabel>
            <Input
              name="pass"
              fontFamily="Roboto"
              bg="white"
              color="black"
              _focus={{ color: "black" }}
              value={pass}
              onChange={handleChange}
              placeholder="Enter your password"
              _placeholder={{ color: "grey" }}
              type="password"
            />
          </FormControl>

          <FormControl mt={4} isRequired>
            <FormLabel color="black">Confirm Password</FormLabel>
            <Input
              name="cpass"
              fontFamily="Roboto"
              bg="white"
              color="black"
              _focus={{ color: "black" }}
              value={cpass}
              onChange={handleChange}
              placeholder="Re-enter your password"
              _placeholder={{ color: "grey" }}
              type="password"
            />
          </FormControl>
        </form>
      </Flex>
      <Button
        mt={4}
        mb={4}
        bg="#395B64"
        color="white"
        _hover={{ backgroundColor: "#2096B6" }}
        isLoading={isSubmitting}
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Flex>
  );
}

export default Register;
