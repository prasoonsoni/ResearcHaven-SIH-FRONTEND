import React from "react";
import { Button, Flex, Text} from "@chakra-ui/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
          h="10vh"
          onClick={() => {
            navigate("drafts");
          }}
        >
          Go to Drafts
        </Button>
        <Button
          leftIcon={<VisibilityIcon />}
          onClick={() => {
            navigate("/dashboard/submitted");
          }}
          w="30vw"
          h="10vh"
        >
          View Submitted Proposals
        </Button>
        <Button
          leftIcon={<VisibilityIcon />}
          onClick={() => {
            navigate("/dashboard/funded");
          }}
          w="30vw"
          h="10vh"
        >
          View Funded Proposals
        </Button>
      </Flex>
      <Flex w="50%" align="center" justify="center">
        <Text>PIE CHART</Text>

      </Flex>
    </Flex>
  );
}
export default ShowPapers;
