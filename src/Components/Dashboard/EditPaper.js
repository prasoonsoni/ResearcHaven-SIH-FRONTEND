import { Button, Flex, Skeleton } from "@chakra-ui/react";
import React, { useState } from "react";
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
  let url = "https://webcrawlers-sih.vercel.app/api/researchpaper/draft/" + id;
  const { data, isLoading, error } = useFetch(url);
  return (
    <Flex w="100vw" align="center" justify="center">
      <Flex h="80vh" w="50%" align="center" justify="center" direction="column">
        {/* if still fetching data from api*/}
        {(isLoading || error) && <Skeleton height="40px" w="100%" m={4} />}
        {/* after data is fetched without error*/}
        {!isLoading && !error && data.data && (
          <>
            <InputElement
              id={id}
              name={headers[headerNum]}
              value={data.data[headers[headerNum]]}
              document={document}
              setDocument={setDocument}
            />
            <Flex mt={4} align="center" justify="space-between" w="100%">
              <Button
                isDisabled={!headerNum}
                onClick={() => {
                  setHeaderNum(headerNum - 1);
                }}
              >
                Previous
              </Button>
              <Button
                isDisabled={headerNum===headers.length-1}
                onClick={() => {
                  setHeaderNum(headerNum + 1);
                }}
              >
                Next
              </Button>
            </Flex>
          </>
        )}
      </Flex>
      <Flex w="50%" align="center" justify="center">
        {document.title}
      </Flex>
    </Flex>
  );
}

export default EditPaper;
