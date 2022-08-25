import { Box, Divider, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useParams } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import { useFetch } from "../../../Hooks/useFetch";
function Check() {
  const params = useParams();
  const id = params.id;

  // for level 1
  const [isLoading1, setIsLoading1] = useState(false);

  // for level 2
  const [isLoading2, setIsLoading2] = useState(false);

  let url = "https://webcrawlers-sih.vercel.app/api/plagiarism/levelOne/" + id;
  const { data, isLoading, error } = useFetch(url, "POST");

  
  return (
    <>
      <Flex w="100%" align="center" justify="center" direction="column" gap={8}>
        <Text fontSize="4xl">PLAGIARISM REPORT</Text>
        <Box>Hello {id}</Box>

        {/* LEVEL 1 */}

        {/* STATIC */}
        <Flex direction="column" gap={8}>
          <Text w="50%">LEVEL 1</Text>

          {/* DYNAMIC */}
          {/* ICON */}
          <Flex align="center" justify="center">
            <ArticleIcon style={{ fontSize: "50px", color: "white" }} />
            {/* DIVIDER AND INFO */}
            <Flex direction="column" align="center" justify="center" gap={2}>
              {!isLoading && <Text>Number of Proposals matched</Text>}
              {isLoading && (
                <Text color="gray">Number of Proposals matched</Text>
              )}
              <Flex>
                <Divider w="100px" />
                <Divider w="100px" />
                <Divider w="100px" />
              </Flex>
              {isLoading && <Spinner size="sm" color="gray" />}
              {!isLoading && data && <Text>{data.data.length}</Text>}
            </Flex>
            {!isLoading && (
              <CheckCircleIcon style={{ fontSize: "50px", color: "white" }} />
            )}
            {isLoading && (
              <CheckCircleIcon style={{ fontSize: "50px", color: "gray" }} />
            )}
          </Flex>
        </Flex>

        {/* LEVEL 2 */}
        {/* STATIC */}
        <Flex direction="column" gap={8}>
          <Text w="50%">LEVEL 2</Text>

          {/* DYNAMIC */}
          {/* ICON */}
          <Flex align="center" justify="center">
            <ArticleIcon style={{ fontSize: "50px", color: "white" }} />
            {/* DIVIDER AND INFO */}
            <Flex direction="column" align="center" justify="center" gap={2}>
              {!isLoading && <Text>Number of Proposals matched</Text>}
              {isLoading && (
                <Text color="gray">Number of Proposals matched</Text>
              )}
              <Flex>
                <Divider w="100px" />
                <Divider w="100px" />
                <Divider w="100px" />
              </Flex>
              {isLoading && <Spinner size="sm" color="gray" />}
              {!isLoading && data && <Text>{data.data.length}</Text>}
            </Flex>
            {!isLoading && (
              <CheckCircleIcon style={{ fontSize: "50px", color: "white" }} />
            )}
            {isLoading && (
              <CheckCircleIcon style={{ fontSize: "50px", color: "gray" }} />
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Check;
