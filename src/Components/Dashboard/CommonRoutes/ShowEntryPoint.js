import { Flex, Skeleton } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import DocShower from "./DocShower";

function ShowEntryPoint() {
  const params = useParams();
  const cid = params.id;
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
  let url = "https://webcrawlers-sih.vercel.app/api/proposal/submitted/"+cid;
  console.log(url);
  const { data, isLoading, error} = useFetch(url,"GET");
  return (
    <Flex w="100%" align="center" justify="center">
      {data&&<DocShower isLoading={isLoading} array={headers} document={data.data} />}
    </Flex>
  );
}

export default ShowEntryPoint;
