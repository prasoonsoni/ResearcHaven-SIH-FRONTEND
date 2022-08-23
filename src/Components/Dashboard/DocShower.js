import { Box, Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";

function DocShower(props) {
  const items = props.array.map((header) => {
    return (
      <Box key={header} m={8}>
        {header === "title" && (
          <Text as="div" align="center" fontFamily="Times" fontSize="xl">
            {props.document[header].toUpperCase().split("_").join(" ")}
          </Text>
        )}
        {header !== "title" && (
          <>
            <Text as="div" fontFamily="Times" fontSize="l">
              {header.toUpperCase().split("_").join(" ")}
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
          <Box>{items}</Box>
        </Box>
      )}
    </>
  );
}

export default DocShower;
