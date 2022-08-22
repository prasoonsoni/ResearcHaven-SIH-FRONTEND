import React, { useEffect, useRef, useState } from "react";
import { Textarea, Button, useToast, Flex, Text } from "@chakra-ui/react";
import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";
import { Kbd } from '@chakra-ui/react'
function InputElement(props) {
  let [value, setValue] = React.useState(props.value?props.value:"");
  const newDoc = { ...props.document };
  const toast = useToast();
  const inputValRef = useRef(null);
  window.onbeforeunload = ()=>{ 
    return handleSave();
  }
  const handleInputChange = (e) => {
    setValue(inputValRef.current.value);
    // newDoc[inputValRef.current.name] = inputValRef.current.value;
    // props.setDocument(newDoc);
  };
  const [isSaving, setIsSaving] = useState(false);
  const handleSave = async () => {
    setIsSaving(true);
    let url =
      "https://webcrawlers-sih.vercel.app/api/researchpaper/update/" + props.id;
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: JSON.stringify(props.document),
    });
    let data = await response.json();
    if (data.success) {
      toast({
        title: "Successful",
        description: data.message,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setIsSaving(false);
    } else {
      toast({
        title: "Error",
        description: data.message,
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      setIsSaving(false);
    }
  };
  const handleSaveField = () => {
    newDoc[inputValRef.current.name] = inputValRef.current.value;
    props.setDocument(newDoc);
    toast({
      title: "Successful",
      description: "Field Saved!",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };
  return (
    <>
      <Flex m={8} w="100%" align="center" justify="center">
        <Button
          isLoading={isSaving}
          loadingText="Saving..."
          onClick={handleSave}
          colorScheme="facebook"
        >
          Save Document <Kbd ml={2} color="white" bg="#171717">ctrl</Kbd>+<Kbd color="white" bg="#171717">S</Kbd>
        </Button>
        <Button colorScheme="red" ml={4}>
          Delete this Document <Kbd ml={2} color="white" bg="#171717">del</Kbd>
        </Button>
        <Button colorScheme="messenger" ml={4}>
          Manage Other Documents <Kbd ml={2} color="white" bg="#171717">ctrl</Kbd>+<Kbd color="white" bg="#171717">M</Kbd>
        </Button>
      </Flex>
      <Flex mb={4} align="center" justify="space-between" w="100%">
        <Button
          isDisabled={!props.headerNum}
          onClick={() => {
            props.setHeaderNum(props.headerNum - 1);
          }}
        >
          Previous
        </Button>
        <Text fontSize="1.2rem" textAlign="center">
          {props.headers[props.headerNum].toUpperCase().split("_").join(" ")}
        </Text>
        <Button
          isDisabled={props.headerNum === props.headers.length - 1}
          onClick={() => {
            handleSaveField();
            props.setHeaderNum(props.headerNum + 1);
          }}
        >
          Next
        </Button>
      </Flex>
      <Textarea
        ref={inputValRef}
        onFocus={(e) =>
          e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length
          )
        }
        name={props.name}
        textAlign="left"
        value={value}
        placeholder={value?value:"Nothing to show yet"}
        onChange={handleInputChange}
        size="lg"
        resize="none"
        variant="filled"
        autoFocus={true}
        _focus={{ outline: "none", boxShadow: "none" }}
        boxShadow="none"
        h="50%"
        p={8}
      />
      {/* <Button colorScheme="teal" onClick={handleSaveField} mt={8} mb={8}>
        Save this field
      </Button> */}
      <Alert
        mt={8}
        status="warning"
        display="flex"
        align="center"
        justify="center"
      >
        <AlertDescription w="100%" direction="row">
          <AlertIcon />
          You cannot undo the action of saving the field!
        </AlertDescription>
      </Alert>
    </>
  );
}

export default InputElement;
