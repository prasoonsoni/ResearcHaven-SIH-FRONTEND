import React, { useEffect } from "react";
import { Textarea, Text } from "@chakra-ui/react";
function InputElement(props) {
  let [value, setValue] = React.useState(props.value);
  console.log(props.value);
  const newDoc = {...props.document};
  const handleInputChange = (e) => {
    console.log(value);
    setValue(e.target.value);
    newDoc[e.target.name] = e.target.value;
    props.setDocument(newDoc);
    console.log(newDoc);
  };
  useEffect(()=>{

  })
  return (
    <>
      <Text mb={8} fontSize="2rem">
        {props.name.toUpperCase()}
      </Text>
      <Textarea
        name={props.name}
        textAlign="left"
        value={value}
        onChange={handleInputChange}
        size="lg"
        resize="none"
        variant="filled"
        autoFocus={true}
        _focus={{
          border: "none",
          boxShadow:
            "0.5px 0.5px 0px 0.5px white,-0.5px -0.5px 0px 0.5px white",
        }}
        h="50%"
        p={8}
      />
    </>
  );
}

export default InputElement;
