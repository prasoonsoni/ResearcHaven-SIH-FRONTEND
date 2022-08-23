import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Divider } from "@chakra-ui/react";
import ArticleIcon from "@mui/icons-material/Article";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@chakra-ui/react";

function Manage() {
  const [isDeleting, setIsDeleting] = useState();
  const toast = useToast();
  const navigate = useNavigate();
  const initialFocusRef = React.useRef();
  let url =
    "https://webcrawlers-sih.vercel.app/api/researchpaper/draft-research-papers";
  const { data, isLoading, error } = useFetch(url, "GET");
  if (error) {
    toast({
      title: error,
      status: "error",
      duration: 1500,
      isClosable: true,
      position: "top-right",
      marginTop: "2rem",
    });
  } else {
    const handleDelete = async (id) => {
      setIsDeleting(true);
      let url =
        "https://webcrawlers-sih.vercel.app/api/researchpaper/delete/" + id;
      let response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("token"),
        },
      });
      let data = await response.json();
      if (data.success) {
        toast({
          title: data.message,
          status: "success",
          duration: 1500,
          isClosable: true,
          position: "top-right",
        });
        setIsDeleting(false);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        toast({
          title: "Error",
          description: data.message,
          status: "error",
          duration: 1500,
          isClosable: true,
        });
        setIsDeleting(false);
      }
    };
    return (
      <Flex h="80vh" w="100%" align="center" justify="space-around" gap={2}>

        {/* FOR SHOWING PAPERS */}
        <Flex direction="column" overflowY="scroll" gap={4}>
          {/* DRAFTS */}
          <Text fontSize="2xl">Drafts</Text>
          <Divider mb={4} />
          {/* fetched drafts paper */}
          <Box>
            {isLoading && (
              <Stack>
                <Skeleton height="40px" />
                <Skeleton height="40px" />
                <Skeleton height="40px" />
              </Stack>
            )}
            {!isLoading &&
              data &&
              data.data.map((paper) => {
                return (
                  <Box key={paper._id}>
                    <Flex
                      key={paper._id}
                      m={2}
                      fontSize="30px"
                      border="1px solid grey"
                      borderRadius="10px"
                      _hover={{ borderColor: "#256D85" }}
                      p={4}
                      minWidth="60vw"
                      align="center"
                      justify="space-evenly"
                    >
                      {/* document icon */}
                      <ArticleIcon fontSize="inherit" />
                      {/* text content: title and description */}
                      <Box w="100%" ml={4} mr={4}>
                        <Text fontSize="1.2rem">
                          {paper.title
                            ? paper.title
                            : `(No Title) ${paper._id}`}
                        </Text>
                      </Box>
                      {/* buttons to edit , delete , publish and check plagiarism */}
                      <ButtonGroup>
                        {/* edit button */}
                        <Button
                          size="sm"
                          onClick={() => {
                            navigate("/dashboard/edit/" + paper._id);
                          }}
                        >
                          <BorderColorOutlinedIcon />
                          &nbsp;Modify
                        </Button>
                        {/* delete popover */}
                        <Popover
                          initialFocusRef={initialFocusRef}
                          placement="bottom"
                          closeOnBlur={true}
                        >
                          <PopoverTrigger>
                            {/* delete document button */}
                            <Button
                              size="sm"
                              bg="#C21010"
                              _hover={{ bg: "#E64848" }}
                              _focus={{ boxShadow: "none", border: "none" }}
                            >
                              <DeleteOutlineOutlinedIcon />
                              DELETE
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            color="white"
                            bg="blue.800"
                            borderColor="blue.800"
                          >
                            <PopoverHeader
                              pt={4}
                              fontSize="md"
                              fontWeight="bold"
                              border="0"
                            >
                              Delete this Document
                            </PopoverHeader>
                            <PopoverArrow bg="blue.800" boxShadow="none" />
                            <PopoverCloseButton />
                            <PopoverBody fontSize="sm">
                              <Alert>This action cannot be undone.</Alert>
                            </PopoverBody>
                            <PopoverFooter
                              border="0"
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                              pb={4}
                            >
                              <ButtonGroup size="sm">
                                <Button
                                  _focus={{ boxShadow: "none", border: "none" }}
                                  colorScheme="red"
                                  isLoading={isDeleting}
                                  loadingText=""
                                  onClick={() => {
                                    handleDelete(paper._id);
                                  }}
                                  ref={initialFocusRef}
                                >
                                  Yes, Delete
                                </Button>
                              </ButtonGroup>
                            </PopoverFooter>
                          </PopoverContent>
                        </Popover>
                        {/* publish button */}
                        <Button size="sm" colorScheme="green">
                          Verify
                        </Button>
                        <Button size="sm" colorScheme="blue">
                          Publish
                        </Button>
                      </ButtonGroup>
                    </Flex>
                  </Box>
                );
              })}
          </Box>

          {/* VERIFIED */}
          <Text fontSize="2xl">Verified Papers</Text>
          <Divider mb={4} />

          {/* PUBLISHED */}
          <Text fontSize="2xl">Published Papers</Text>
          <Divider mb={4} />
        </Flex>
        {/* DIVIDER */}
        <Divider orientation="vertical" />
        {/* EXTRA FEATURES */}
        <Flex direction="column">
          <ButtonGroup>
            <Button bg="teal"><AddIcon/>CREATE A NEW DRAFT</Button>
            <Button><UploadIcon/>UPLOAD YOUR PAPER</Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    );
  }
}

export default Manage;
