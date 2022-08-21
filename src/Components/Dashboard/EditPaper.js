import { Button, Flex, Skeleton, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputElement from "./InputElement";
import { useFetch } from "../Hooks/useFetch";
function EditPaper() {
  // to get the id of the paper
  const params = useParams();
  const id = params.id;
  // setting state for the whole documents
  const [document, setDocument] = useState({
    id: id,
    title: "",
    authors: "",
    keywords: "",
    abstract: "",
    introduction: "",
    literature_survey: "",
    proposed_work: "",
    methodology: "",
    experimental_evaluation: "",
    conclusion: "",
    references: "",
  });
  // setting a state variable to get the titles from structure
  const [headerNum, setHeaderNum] = useState(0);
  const headers = [
    "title",
    "authors",
    "keywords",
    "abstract",
    "introduction",
    "literature_survey",
    "proposed_work",
    "methodology",
    "experimental_evaluation",
    "conclusion",
    "references",
  ];
  const toast = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const handleSave = async () => {
    setIsSaving(true);
    let url =
      "https://webcrawlers-sih.vercel.app/api/researchpaper/update/" + id;
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: JSON.stringify(document),
    });
    let data = await response.json();
    if (data.success) {
      toast({
        title: "Successful",
        description: data.message,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setIsSaving(false);
    } else {
      toast({
        title: "Error",
        description: data.message,
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      setIsSaving(false);
    }
  };
  let url = "https://webcrawlers-sih.vercel.app/api/researchpaper/draft/" + id;
  const { data, isLoading, error } = useFetch(url);
  useEffect(() => {
    if (data) {
      setDocument(data.data);
    }
  }, [data]);
  return (
    <Flex w="100vw" align="center" justify="center">
      <Flex h="80vh" w="50%" align="center" justify="center" direction="column">
        {/* if still fetching data from api*/}
        {(isLoading || error) && <Skeleton height="40px" w="100%" m={4} />}
        {/* after data is fetched without error*/}
        {!isLoading && !error && data.data && (
          <>
          <Flex m={8} w="100%" align="center" justify="center">
              <Button
                isLoading={isSaving}
                loadingText="Saving..."
                onClick={handleSave}
                colorScheme="facebook"
              >
                Save Document
              </Button>
              <Button colorScheme="red" ml={4}>
                Delete this Document
              </Button>
              <Button colorScheme="messenger" ml={4}>
                Manage Other Documents
              </Button>
            </Flex>
            <Flex mb={4} align="center" justify="space-between" w="100%">
              <Button
                isDisabled={!headerNum}
                onClick={() => {
                  setHeaderNum(headerNum - 1);
                }}
              >
                Previous
              </Button>
              <Text mb={8} fontSize="1.2rem">
                {headers[headerNum].toUpperCase().split("_").join(" ")}
              </Text>
              <Button
                isDisabled={headerNum === headers.length - 1}
                onClick={() => {
                  setHeaderNum(headerNum + 1);
                }}
              >
                Next
              </Button>
            </Flex>
            <InputElement
              key={document[headers[headerNum]]}
              id={id}
              name={headers[headerNum]}
              value={document[headers[headerNum]]}
              document={document}
              setDocument={setDocument}
            />
          </>
        )}
      </Flex>
      <Flex w="50%" align="center" justify="center">
        hehehehe
      </Flex>
    </Flex>
  );
}

export default EditPaper;
