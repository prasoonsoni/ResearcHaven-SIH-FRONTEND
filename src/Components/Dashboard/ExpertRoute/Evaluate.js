import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Text,
  Flex,
  useToast,
  VStack,
  Input,
} from "@chakra-ui/react";

import { useFetch } from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Evaluate() {
  const toast = useToast();
  const navigate = useNavigate();
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");
  const [score3, setScore3] = useState("");
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [obj, setObj] = useState({
    score1: "",
    score2: "",
    score3: "",
    comments: "",
  });
  let myObj = { ...obj };
  // TO GET THE DOCUMENT
  let url = "https://webcrawlers-sih.vercel.app/api/expert/all";
  const { data, isLoading, error } = useFetch(url, "GET");

  //   TO POST THE MARKS AND REVIEWS TO THE ADMIN
  const handleSubmit = async (paper) => {
    setIsSubmitting(true);
    console.log(myObj)
    let url = "https://webcrawlers-sih.vercel.app/api/expert/verify/" + paper.cid;
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":sessionStorage.getItem("token")
      },
      body: JSON.stringify(myObj),
    });
    let data = await response.json();
    if (data.success) {
      toast({
        title: "Successfully Sent!",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top-right",
        marginTop: "2rem",
      });
      setIsSubmitting(false);
      window.reload();
    } else {
      setIsSubmitting(false);
      alert(data.message);
    }
  };
  useEffect(() => {
    myObj["score1"]= score1;
    myObj["score2"]= score2;
    myObj["score3"]= score3;
    myObj["comments"] = comments;
  });
  return (
    <Flex direction="column">
      <Text w="100%" align="right">
        M.M.(per field) : 100
      </Text>
      <VStack>
        <TableContainer align="center" justify="center" w="100%" h="100%">
          <Table variant="simple">
            <TableCaption>Evaluation metrics</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>TITLE</Th>
                <Th>VIEW</Th>
                <Th isNumeric>INNOVATION</Th>
                <Th isNumeric>SOCIAL IMPACTS</Th>
                <Th isNumeric>UNIQUENESS</Th>
                <Th isNumeric>Comments</Th>
                <Th>SEND TO ADMIN</Th>
              </Tr>
            </Thead>
            <Tbody>
              <>
                {data &&
                  data.data.lenght !== 0 &&
                  data.data.map((paper) => {
                    return (
                      <Tr key={paper._id}>
                        <Td>{paper._id}</Td>
                        <Td>{paper.title}</Td>
                        <Td>
                          <Button
                            onClick={() => {
                              navigate("/dashboard/expert/view/" + paper.cid);
                            }}
                          >
                            View Document
                          </Button>
                        </Td>
                        <Td isNumeric>
                          <Input onChange={(e)=>{setScore1(e.target.value);}} value={score1}/>
                        </Td>
                        <Td isNumeric>
                        <Input onChange={(e)=>{setScore2(e.target.value);}} value={score2}/>
                        </Td>
                        <Td isNumeric>
                        <Input onChange={(e)=>{setScore3(e.target.value);}} value={score3}/>
                        </Td>
                        <Td>
                        <Input onChange={(e)=>{setComments(e.target.value);}} value={comments}/>
                        </Td>
                        <Td>
                          <Button
                            onClick={() => {
                              handleSubmit(paper);
                            }}
                          >
                            SEND
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })}
              </>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Flex>
  );
}

export default Evaluate;
