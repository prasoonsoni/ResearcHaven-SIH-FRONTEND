import React, { useRef } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
function InputElement(props) {
  let [value, setValue] = React.useState(props.value);
  const newDoc = { ...props.document };
  const inputValRef = useRef(null);
  const toast = useToast();
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSaveField = () => {
    newDoc[inputValRef.current.name] = inputValRef.current.value;
    props.setDocument(newDoc);
    toast({
      title: "Successful",
      description: "Field Saved!",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };
  return (
    <>
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
      <Button colorScheme="teal" onClick={handleSaveField} mt={8} mb={8}>
        Save this field
      </Button>
      <Alert status="error" display="flex" align="center" justify="center">
        
        <AlertDescription w="100%" direction="row">
        <AlertIcon/>
          You cannot undo the action of saving the field!
        </AlertDescription>
      </Alert>
    </>
  );
}

export default InputElement;
