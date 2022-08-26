import { Box, Button, Skeleton, Text, Stack } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import Pdf from 'react-to-pdf'
function DocShower(props) {
  const ref = React.createRef();
  const items = props.array.map((header) => {
    return (
      <Box key={header} m={8}>
        {header === "title" && (
          <Text as="div" align="center" fontFamily="Times" fontSize="xl">
            <ReactMarkdown>{props.document[header] === "" ? "No Title" : props.document[header].toUpperCase().split("_").join(" ")}</ReactMarkdown>
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
    <Stack>
      {props.isLoading && (
        <Skeleton height="80vh" w="100%" m={4} borderRadius="10px" />
      )}
      {!props.isLoading && (
        <>
          <Pdf targetRef={ref} filename="report.pdf">
            {({ toPdf }) => <Button colorScheme='blue' onClick={toPdf}>Generate Pdf</Button>}
          </Pdf>
          <Box ref={ref}
            m={4}
            p={4}
            borderRadius="10px"
            bg="white"
            color="black"
            w="40vw">
            <Box>{items}</Box>
          </Box>
        </>
      )}
    </Stack>

  );
}

export default DocShower;
