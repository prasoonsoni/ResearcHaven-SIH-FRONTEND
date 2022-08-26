import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

function SubmittedItem(props) {
  const navigate = useNavigate();
  return (
    <Flex
      key={props.paper._id}
      m={2}
      fontSize="30px"
      border="1px solid grey"
      borderRadius="10px"
      _hover={{ borderColor: "#256D85" }}
      p={4}
      justify="space-between"
      align="center"
      w="100vw"
    >
      <Flex align="center" gap={2}>
        {/* document icon */}
        <ArticleIcon fontSize="inherit" />
        {/* text content: title and description */}
        <Text fontSize="1rem" mt={4} mb={4}>
          {props.paper.title
            ? props.paper.title.length > 125
              ? props.paper.title.slice(0, 125) + "..."
              : props.paper.title
            : `(No Title)`}
        </Text>
      </Flex>
      <ButtonGroup>
        <Button
          onClick={() => {
            navigate("/dashboard/view/" + props.paper.cid);
          }}
        >
          View Proposal
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default SubmittedItem;
