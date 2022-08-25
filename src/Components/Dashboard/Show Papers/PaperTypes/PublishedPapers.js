import React from "react";
import { Button, Flex, Divider, Text, Stack, Skeleton } from "@chakra-ui/react";
// import { ButtonGroup } from 'react-bootstrap';
import ArticleIcon from "@mui/icons-material/Article";
// import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
// import {useNavigate} from 'react-router-dom';
function PublishedProposals(props) {
  // const navigate = useNavigate();
  return (
    <Flex direction="column" gap={4}>
      {/* DRAFTS */}
      <Text fontSize="2xl">Published Papers</Text>
      <Divider mb={4} />
      {/* fetched drafts paper */}
      <Flex>
        {props.isLoading && (
          <Stack>
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
          </Stack>
        )}
        {!props.isLoading &&
          props.data &&
          props.data.data.map((paper, index) => {
            return (
              <Flex
                //   bg="purple.800"
                key={paper._id}
                m={2}
                fontSize="30px"
                borderRadius="10px"
                border="1px solid #ddd"
                p={4}
                justify="space-evenly"
                direction="column"
              >
                {/* text content: title and description */}
                {/* document icon */}
                <ArticleIcon fontSize="inherit" />
                <Text fontSize="1rem" mt={4} mb={4}>
                  {paper.title ? paper.title : `(No Title) ${paper._id}`}
                </Text>

                {/* buttons to edit , delete , publish and check plagiarism */}
                <Button bg="purple.800">View Document</Button>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
}

export default PublishedProposals;
