import { Divider, Flex, Spinner, Text } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import React from 'react'
import ArticleIcon from "@mui/icons-material/Article";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useFetch } from '../../../Hooks/useFetch';
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import Level2 from "./Level2";
function Level1() {
  const params = useParams();
  const id = params.id;
  let isRequired = false;
  let url = "https://webcrawlers-sih.vercel.app/api/plagiarism/levelOne/" + id;
  let reject = 0;
  const { data, isLoading, error } = useFetch(url, "POST");
  if (data) {
    isRequired = data.mean > 20;
  }
  return (
    <>
    <Flex
          direction="column"
          gap={8}
          border="2px"
          w="50vw"
          borderRadius="1.2rem"
          borderColor={
            isLoading ? "gray" : isRequired ? "orange" : "mediumseagreen"
          }
          p={4}
        >
          {/* STATIC */}
          <Text fontSize="3xl" w="100%" align="center">
            LEVEL 1
          </Text>

          {/* DYNAMIC */}
          {/* ICON */}
          <Flex align="center" justify="center">
            <ArticleIcon style={{ fontSize: "50px", color: "white" }} />

            {/* DIVIDER AND INFO */}
            <Flex direction="column" align="center" justify="center" gap={2}>
              {!isLoading && (
                <Text>Bibliography, Keyword and Literature Review</Text>
              )}
              {isLoading && <Text color="gray">Preliminary Check</Text>}
              <Flex>
                <Divider w="100px" />
                <Divider w="100px" />
                <Divider w="100px" />
                <Divider w="100px" />
              </Flex>
              {isLoading && <Spinner size="sm" color="gray" />}
              {!isLoading && <>
              Mean Plagiarism Score is : {data.mean}<br/>
              <h1>COMPARED WITH : </h1>
              {data && data.data.map((item,index)=>{
                return <div key={item.id}><div>{index+1} CID : {item.id}</div>
                <div>SIMILARITY SCORE: {item.plagiarism}</div></div>
              })}
              </>}
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
    {data && (
      <>
        {/* down arrow show */}
        <ExpandCircleDownIcon style={{ fontSize: "30px" }} />
        {/* level 2 component */}
        {!reject && <Level2 isRequired={isRequired} id={id} />}
      </>
    )}
    </>
  )
}

export default Level1