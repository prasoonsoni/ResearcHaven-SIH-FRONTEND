import {
  Alert,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
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
    
    const fetchData = async () => {
      let response = await fetch(
        "https://webcrawlers-sih.vercel.app/api/researchpaper/create",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "auth-token": sessionStorage.getItem("token"),
          },
        }
      );
      let data = await response.json();
      if (data.success) {
        // setId(data["data"].id)
        // console.log(data["data"].id)
        // console.log(id);
        let path = `/dashboard/edit/${data.data.id}`;
        navigate(path);
      } else {
        console.log(data.message);
      }
    };
    return (
      <Flex w="100%" direction="column" gap={2}>
        {/* CREATE AND UPLOAD BUTTON */}
        <ButtonGroup mb={4} mt={4}>
          <Button onClick={fetchData} bg="teal" _hover={{ bg: "blue.800" }}>
            <AddIcon />
            CREATE A NEW DRAFT
          </Button>
          <Button>
            <UploadIcon />
            UPLOAD YOUR PAPER
          </Button>
        </ButtonGroup>
        {/* FOR SHOWING PAPERS */}
        <Flex h="50vh" direction="column" gap={4}>
          {/* DRAFTS */}
          <Text fontSize="2xl">Drafts</Text>
          <Divider mb={4} />
          {/* fetched drafts paper */}
          <Flex>
            {isLoading && (
              <Stack>
                <Skeleton height="40px" />
                <Skeleton height="40px" />
                <Skeleton height="40px" />
              </Stack>
            )}
            {!isLoading &&
              data &&
              data.data.map((paper, index) => {
                return (
                  <Flex
                    key={paper._id}
                    m={2}
                    fontSize="30px"
                    border="1px solid grey"
                    borderRadius="10px"
                    _hover={{ borderColor: "#256D85" }}
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
                    <ButtonGroup>
                      {/* edit button */}
                      <Button
                        colorScheme="yellow"
                        fontSize="12px"
                        onClick={() => {
                          navigate("/dashboard/edit/" + paper._id);
                        }}
                      >
                        <BorderColorOutlinedIcon fontSize="12px" />
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
                            colorScheme="red"
                            _focus={{ boxShadow: "none", border: "none" }}
                            fontSize="12px"
                          >
                            <DeleteOutlineOutlinedIcon fontSize="12px" />
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
                            <Button
                              fontSize="12px"
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
                          </PopoverFooter>
                        </PopoverContent>
                      </Popover>
                      {/* publish button */}
                      <Button fontSize="12px" colorScheme="green">
                        Verify
                      </Button>
                      <Button fontSize="12px" colorScheme="blue">
                        Publish
                      </Button>
                    </ButtonGroup>
                  </Flex>
                );
              })}
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default Manage;
