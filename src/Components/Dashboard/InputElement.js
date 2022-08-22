import React, { useEffect, useRef, useState } from "react";
import { Textarea, Button, useToast, Flex, Text } from "@chakra-ui/react";
import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { ArrowBackIcon, ArrowForwardIcon, DeleteIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Kbd } from '@chakra-ui/react'
function InputElement(props) {
  console.log(props.value);
  const [value, setValue] = React.useState(props.value);
  const newDoc = { ...props.document };
  const toast = useToast();
  const inputValRef = useRef(null);
  const [isSaving, setIsSaving] = useState(false);
  window.onbeforeunload = ()=>{ 
    return "Please review changes";
  }
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
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
  useEffect(()=>{
    if(!value){
      setValue(newDoc[props.name])
    }
  },[newDoc,setValue])
  return (
    <>
      <Flex direction={{base:"column",md:"column",lg:"row"}} m={8} w="100%" align="center" justify="center">
        <Button
        mb={8}
          isLoading={isSaving}
          loadingText="Saving..."
          onClick={handleSave}
          colorScheme="facebook"
        >
          <SaveOutlinedIcon/>Save Document <Kbd ml={2} color="white" bg="#171717">ctrl</Kbd>+<Kbd color="white" bg="#171717">S</Kbd>
        </Button>
        <Button mb={8} colorScheme="red" ml={4}>
        <DeleteIcon/>Delete Document <Kbd ml={2} color="white" bg="#171717">del</Kbd>
        </Button>
        <Button mb={8} colorScheme="messenger" ml={4}>
          <ExternalLinkIcon/>Manage Documents <Kbd ml={2} color="white" bg="#171717">ctrl</Kbd>+<Kbd color="white" bg="#171717">M</Kbd>
        </Button>
      </Flex>
      <Flex mb={4} align="center" justify="space-between" w="100%">
        <Button
          isDisabled={!props.headerNum}
          onClick={() => {
            handleSaveField();
            props.setHeaderNum(props.headerNum - 1);
          }}
        >
          <ArrowBackIcon/>Previous
        </Button>
        <Text fontSize="1.2rem" textAlign="center">
          {props.headers[props.headerNum].toUpperCase().split("_").join(" ")}
        </Text>
        <Button
          display={props.headerNum!==props.headers.length-1?"":"none"}
          onClick={() => {
            handleSaveField();
            props.setHeaderNum(props.headerNum + 1);
          }}
        >
          Next<ArrowForwardIcon/>
        </Button>
        <Button colorScheme="green" display={props.headerNum===props.headers.length-1?"":"none"} onClick={handleSave} isLoading={isSaving} loadingText="Saving...">
        Save Document
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
        placeholder={props.value?value:"Nothing to show yet"}
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
        mb={8}
        status="warning"
        display="flex"
        align="center"
        justify="center"
      >
        <AlertDescription w="100%" display="flex" direction="row">
        <AlertIcon />You cannot undo the action of saving the field!
        </AlertDescription>
      </Alert>
    </>
  );
}

export default InputElement;
