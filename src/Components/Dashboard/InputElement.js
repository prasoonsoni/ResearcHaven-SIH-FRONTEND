import React from "react";
import { Textarea, Text } from "@chakra-ui/react";
function InputElement(props) {
    const docObj = {};
  let [value, setValue] = React.useState("");
  let [header, setHeader] = React.useState("");
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
    setHeader(e.target.name);
    docObj.header = header;
    docObj.value = value;
    sessionStorage.setItem("docObject",docObj);
  };
  return (
    <>
      <Text mb={8} fontSize="2rem">
        {props.name}
      </Text>
      <Textarea
      name={props.name}
        textAlign="left"
        value={value}
        onChange={handleInputChange}
        placeholder="Start Typing"
        size="lg"
        resize="none"
        variant="filled"
        autoFocus={true}
        _focus={{border:"none",boxShadow:"0.5px 0.5px 0px 0.5px white,-0.5px -0.5px 0px 0.5px white"}}
        h="50%"
        p={8}
      />
    </>
  );
}

export default InputElement;
