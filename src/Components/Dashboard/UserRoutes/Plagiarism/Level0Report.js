import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import ShowLevel0 from "./ShowLevel0";

function Level0Report(props) {
  let url = "https://webcrawlers-sih.vercel.app/api/proposal/draft/" + props.id;
  const { data, isLoading, error } = useFetch(url, "GET");
  console.log(data);
  return <>{data && <ShowLevel0 document={data.data} />}</>;
}
export default Level0Report;
