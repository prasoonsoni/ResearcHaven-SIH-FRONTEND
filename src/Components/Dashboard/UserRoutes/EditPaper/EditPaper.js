import { Flex, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputElement from "./InputElement";
import DocShower from "../../CommonRoutes/DocShower";
import { useFetch } from "../../../Hooks/useFetch";

function EditPaper() {
  // to get the id of the paper
  const params = useParams();
  const id = params.id;
  // setting state for the whole documents
  const [document, setDocument] = useState({
    title:"",
    researchers:"",
    keywords:"",
    introduction:"",
    problem_statement_and_objectives:"",
    literature_review:"",
    methodology:"",
    bibliography:"",
  });
  // setting a state variable to get the titles from structure
  const [headerNum, setHeaderNum] = useState(0);
  const headers = [
    "title",
    "researchers",
    "keywords",
    "introduction",
    "problem_statement_and_objectives",
    "literature_review",
    "methodology",
    "bibliography",
  ];
  let url = "https://webcrawlers-sih.vercel.app/api/proposal/draft/" + id;
  const { data, isLoading, error } = useFetch(url);
  useEffect(() => {
    if (data) {
      setDocument(data.data);
    }
  }, [data]);
  return (
    <Flex
      direction={{ base: "column", md: "column", lg: "row" }}
      w="100vw"
      align="center"
      justify="center"
    >
      <Flex w="50%" h="80vh" align="center" justify="center" direction="column">
        {/* if still fetching data from api*/}
        {(isLoading || error) && (
          <Skeleton height="80vh" w="100%" m={4} borderRadius="10px" />
        )}
        {/* after data is fetched without error*/}
        {!isLoading && !error && data.data && (
          <InputElement
            key={
              headerNum === 0
                ? document[headers[headerNum]] && headerNum
                : headers[headerNum]
            }
            id={id}
            name={headers[headerNum]}
            value={document[headers[headerNum]]}
            document={document}
            setDocument={setDocument}
            headers={headers}
            headerNum={headerNum}
            setHeaderNum={setHeaderNum}
            h="50vh"
            overflowY="scroll"
            p={8}
          />
        )}
      </Flex>
      <Flex w="50%" align="center" justify="center">
        <DocShower
          isLoading={isLoading}
          document={document}
          array={headers}
          headerNum={headerNum}
        />
      </Flex>
    </Flex>
  );
}

export default EditPaper;
