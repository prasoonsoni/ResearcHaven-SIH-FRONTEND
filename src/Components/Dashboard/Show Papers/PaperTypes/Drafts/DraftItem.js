import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, ButtonGroup, Flex, useToast, Text } from "@chakra-ui/react";
function DraftItem(props) {
  const toast = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async()=>{
    let url = "https://webcrawlers-sih.vercel.app/api/user/"
  }
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
      {/* buttons to edit , delete , publish and check plagiarism */}
      <ButtonGroup>
        {/* edit button */}
        <Button
          colorScheme="teal"
          isDisabled={isSubmitting}
          fontSize="14px"
          onClick={() => {
            navigate("/dashboard/edit/" + props.paper._id);
          }}
        >
          <BorderColorOutlinedIcon fontSize="12px" />
          &nbsp;Edit
        </Button>

        {/* publish button */}
        <Button
          fontSize="14px"
          colorScheme="blue"
          isLoading={isSubmitting}
          loadingText="Checking.."
          onClick={()=>{
            console.log("Click is working");
          }}
        >
          Check Plagiarism
        </Button>
        <Button fontSize="12px">SEE PLAGIARISM REPORT</Button>
      </ButtonGroup>
    </Flex>
  );
}

export default DraftItem;
