import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
function ExpertRoot() {
  const navigate = useNavigate();
  return (
    <Flex>
      <Button
        onClick={() => {
          navigate("/dashboard/expert/evaluate");
        }}
      >
        EVALUATE DOCUMENTS
      </Button>
    </Flex>
  );
}

export default ExpertRoot;
