import { Box, Skeleton, Text } from "@chakra-ui/react";
import React from "react";

function DocShower(props) {
  const items = props.array.map((title) => {
    return (
      <Box key={title} m={8}>
        <Text fontFamily="Times" as="b" fontSize="2xl">
          {title.toUpperCase().split("_").join(" ")}
        </Text>
        <Text fontFamily="Times New Roman" size="xl">{props.document[title]}</Text>
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
          <div>{items}</div>
        </Box>
      )}
    </>
  );
}

export default DocShower;
