import { Box, Button, Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";

function DocShower(props) {
  const ref=React.createRef();
  const items = props.array.map((header) => {
    return (
      <Box key={header} m={8}>
        {header === "title" && (
          <Text as="div" align="center" fontFamily="Times" fontSize="xl">
            <ReactMarkdown>{props.document[header]===""?"No Title":props.document[header].toUpperCase().split("_").join(" ")}</ReactMarkdown>
          </Text>
        )}
        {header !== "title" && (
          <>
            <Text as="div" fontFamily="Times" fontSize="l">
              <ReactMarkdown>{`**${header.toUpperCase().split("_").join(" ")}**`}</ReactMarkdown>
            </Text>
            <Text as="div" fontFamily="Times New Roman">
              <ReactMarkdown>{props.document[header]}</ReactMarkdown>
            </Text>
          </>
        )}
      </Box>
    );
  });
  return (
    <>
      {props.isLoading && (
        <Skeleton height="80vh" w="100%" m={4} borderRadius="10px" />
      )}
      {!props.isLoading && (
        <>
        
        <Box
          m={4}
          p={4}
          borderRadius="10px"
          h="80vh"
          bg="white"
          color="black"
          w="40vw"
          overflowY="scroll"
        >
          <Box ref={ref}>{items}</Box>
        </Box>
        </>
      )}
      </>
    
  );
}

export default DocShower;
