import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
function ShowPapers() {
  const navigate = useNavigate();
  return (
    <Flex align="center">
      <Flex
        direction="column"
        w="50vw"
        h="75vh"
        gap={8}
        align="center"
        justify="center"
      >
        <Button
        w="30vw"
          onClick={() => {
            navigate("drafts");
          }}
        >
          Go to Drafts
        </Button>
        <Button w="30vw">Plagiarism Reports</Button>
        <Button w="30vw">Go to Submitted Documents</Button>
        <Button w="30vw" leftIcon={<VisibilityIcon />} onClick={()=>{navigate('/dashboard/all_funded_proposals')}}>View All Funded Proposals</Button>
      </Flex>
      <Flex w="50%" align="center" justify="center">
        <Text >PIE CHART</Text>
      </Flex>
    </Flex>
  );
}
export default ShowPapers;
