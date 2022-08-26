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
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { useFetch } from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Evaluate() {
  const toast = useToast();
  const navigate = useNavigate();
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [comments, setComments] = useState(0);
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [obj, setObj] = useState({
    score1: "",
    score2: "",
    score3: "",
    comments: "",
  });
  // TO GET THE DOCUMENT
  let url = "";
  const { data, isLoading, error } = useFetch(url, "GET");

  //   TO POST THE MARKS AND REVIEWS TO THE ADMIN
  const handleSubmit = async () => {
    setIsSubmitting(true);
    let url = "";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application",
      },
      body: { obj },
    });
    let data = await response.json();
    if (data.success) {
      toast({
        title: data.message,
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top-right",
        marginTop: "2rem",
      });setIsSubmitting(false);
    }else{
        setIsSubmitting(false);
        alert(data.message);
    }
  };
  return (
    <Flex direction="column">
      <Text w="100%" align="right">
        M.M.(per field) : 100
      </Text>
      <TableContainer>
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
            {data &&
              data.data.lenght !== 0 &&
              data.data.map((paper) => {
                return (
                  <Tr>
                    <Td>{paper.id}</Td>
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
                      <Editable
                        value={score1 ? score1 : "Enter Marks"}
                        onClick={(e) => {
                          setScore1(e.target.value);
                        }}
                      >
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                    <Td isNumeric>
                      <Editable
                        value={score2 ? score2 : "Enter Marks"}
                        onClick={(e) => {
                          setScore2(e.target.value);
                        }}
                      >
                        <EditablePreview />
                        <EditableInput placeholder="Enter marks here" />
                      </Editable>
                    </Td>
                    <Td isNumeric>
                      <Editable
                        value={score3 ? score3 : "Enter Marks"}
                        onClick={(e) => {
                          setScore3(e.target.value);
                        }}
                      >
                        <EditablePreview />
                        <EditableInput placeholder="Enter marks here" />
                      </Editable>
                    </Td>
                    <Td>
                      <Editable
                        value={comments ? comments : "Enter Marks"}
                        onClick={(e) => {
                          setComments(e.target.value);
                        }}
                      >
                        <EditablePreview />
                        <EditableInput placeholder="Enter your remarks here" />
                      </Editable>
                    </Td>
                    <Td>
                      <Button>SEND</Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default Evaluate;
