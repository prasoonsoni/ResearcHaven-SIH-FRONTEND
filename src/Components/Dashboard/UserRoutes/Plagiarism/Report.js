import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Level1Report from "./Level1Report";
import Level2Report from "./Level2Report";

function Report() {
  
  const params = useParams();
  const id = params.id;
  return (<>
    
    <Flex gap={8} direction="column">
      <Level1Report id={id} />
      <Level2Report id={id} />
    </Flex></>
  );
}

export default Report;
