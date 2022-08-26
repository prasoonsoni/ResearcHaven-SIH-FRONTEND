import React, { useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
function DraftItem(props) {
    const [isSubmitting,setIsSubmitting] = useState(false);
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

        {/* check button */}
        <Button
          fontSize="14px"
          colorScheme="blue"
          onClick={()=>{
            if(props.paper.title===""){
              alert("Empty document can not be submitted for plagiarism check");
            }else{
            navigate("/dashboard/check/"+props.paper._id);}
          }}
        >
          Check Plagiarism
        </Button>
        <Button fontSize="12px" onClick={navigate("/dashboard/report/"+props.paper._id)}>SEE PLAGIARISM REPORT</Button>
      </ButtonGroup>
    </Flex>
  );
}

export default DraftItem;
