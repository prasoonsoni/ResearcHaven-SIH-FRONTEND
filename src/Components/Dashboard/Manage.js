import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Stack,
  Text,
  useToast,
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

  let url =
    "https://webcrawlers-sih.vercel.app/api/researchpaper/draft-research-papers";

  const { data, isLoading, error } = useFetch(url, "GET");

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
        marginTop: "2rem",
      });
      setIsDeleting(false);
      navigate("/");
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
  if (data) {
    console.log(data);
  }
  return (
    <>
      <Box w="50%">
        <Text fontSize="2xl">Drafts</Text>
        <Divider mb={4} />
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
              console.log(paper);
              return (
                <Flex
                  m={2}
                  fontSize="30px"
                  border="2px solid grey"
                  p={4}
                  align="center"
                  justify="space-evenly"
                >
                  <ArticleIcon fontSize="inherit" />
                  <Box w="100%" ml={2}>
                    <Text w="100%" fontSize="1.2rem">
                      {paper.title}
                    </Text>
                  </Box>
                  <ButtonGroup>
                    <Button colorScheme="blue">
                      <BorderColorOutlinedIcon />
                    </Button>
                    <Button
                      isLoading={isDeleting}
                      loadingText=""
                      onClick={() => {
                        handleDelete(paper._id);
                      }}
                      colorScheme="red"
                    >
                      <DeleteOutlineOutlinedIcon />
                    </Button>
                  </ButtonGroup>
                </Flex>
              );
            })}
        </Box>
      </Box>
    </>
  );
}

export default Manage;
