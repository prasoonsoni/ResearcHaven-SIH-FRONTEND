import { Flex, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputElement from "./InputElement";
import DocShower from "./DocShower";
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
  useEffect(() => {
    if (data) {
      setDocument(data.data);
    }
  }, [data]);
  return (
    <Flex direction={{base:"",md:"column",lg:"row"}} w="100vw" align="center" justify="center">
      <Flex h="80vh" w="55%" align="center" justify="center" direction="column">
        {/* if still fetching data from api*/}
        {(isLoading || error) && <Skeleton height="90vh" w="100%" m={4} borderRadius="10px" />}
        {/* after data is fetched without error*/}
        {!isLoading && !error && data.data && (
          <>
            <InputElement
              key={headerNum===0?document[headers[headerNum]]:headers[headerNum]}
              id={id}
              name={headers[headerNum]}
              value={document[headers[headerNum]]}
              document={document}
              setDocument={setDocument}
              headers={headers}
              headerNum={headerNum}
              setHeaderNum={setHeaderNum}
            />
          </>
        )}
      </Flex>
      <Flex w="50%" align="center" justify="center">
        <DocShower isLoading={isLoading} document={document} array={headers} headerNum={headerNum}/>
      </Flex>
    </Flex>
  );
}

export default EditPaper;
