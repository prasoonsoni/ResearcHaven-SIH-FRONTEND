import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Show,
  Text,
  useToast,
  InputRightElement,
  InputGroup
} from "@chakra-ui/react";
import React, { useState } from "react";

function Register(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [cpass, setCpass] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [show, setShow] = React.useState(false)
  const [show1, setShow1] = React.useState(false)

  const toast = useToast();

  const handleClick = () => setShow(!show)
  const handleClick1 = () => setShow1(!show1)


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
    if (email === "" || pass === "" || first === "" || last === "") {
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
    }else if(name==="phone"){
      setPhone(event.target.value);
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
          Register
        </Text>
        <Flex
          p={4}
          w={props.width}
          direction="column"
          justifyContent="center"
        >
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel color="white">First name</FormLabel>
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
              <FormLabel color="white">Last name</FormLabel>
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
              <FormLabel color="white">Email address</FormLabel>
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
              <FormLabel color="white">Phone Number</FormLabel>
              <Input
                name="phone"
                fontFamily="Roboto"
                bg="white"
                color="black"
                _focus={{ color: "black" }}
                value={phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                _placeholder={{ color: "grey" }}
                type="tel"
              />
            </FormControl>


            <FormControl mt={4} isRequired>
              <FormLabel color="white">Password</FormLabel>
              <InputGroup size='md'>
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
                  type={show1 ? 'text' : 'password'}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick1} color='black' bg="#EDF2F7" _hover={{ backgroundColor: "" }}>
                    {show1 ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel color="white">Confirm Password</FormLabel>
              <InputGroup size='md'>
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
                  type={show ? 'text' : 'password'}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick} color='black' bg="#EDF2F7" _hover={{ backgroundColor: "" }}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </form>
        </Flex>
        <Button
          mt={4}
          mb={4}
          colorScheme="blue"
          color="black"
          isLoading={isSubmitting}
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Flex>
    </Show>
  );
}

export default Register;
