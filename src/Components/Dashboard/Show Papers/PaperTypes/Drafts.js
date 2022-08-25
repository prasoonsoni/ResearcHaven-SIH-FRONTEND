import React,{useState} from "react";
import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import ArticleIcon from "@mui/icons-material/Article";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";

function Drafts() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  let url =
    "https://webcrawlers-sih.vercel.app/api/proposal/draft";
  const { data, isLoading, error } = useFetch(url, "GET");
  if (error) {
    alert(error);
  }
  console.log(isLoading);
  const toast = useToast();
  return (
    <>
      <Text fontSize="2xl">Drafts</Text>
      <Divider mb={4} />
      <Flex direction="column" gap={4} w="100%">
        {/* fetched drafts paper */}
        <Flex wrap="wrap">
          {isLoading && (
            <Stack w="100%">
              <Skeleton h="60px"/>
              <Skeleton h="60px"/>
              <Skeleton h="60px"/>
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
                  justify="space-between"
                  align="center"
                  w="100vw"
                >
                  <Flex align="center" gap={2}>
                    {/* document icon */}
                    <ArticleIcon fontSize="inherit" />
                    {/* text content: title and description */}
                    <Text fontSize="1rem" mt={4} mb={4}>
                      {paper.title
                        ? paper.title.length > 125
                          ? paper.title.slice(0, 125) + "..."
                          : paper.title
                        : `(No Title)`}
                    </Text>
                  </Flex>
                  {/* buttons to edit , delete , publish and check plagiarism */}
                  <ButtonGroup>
                    {/* edit button */}
                    <Button
                      colorScheme="teal"
                      isDisabled ={isSubmitting}
                      fontSize="12px"
                      onClick={() => {
                        navigate("/dashboard/edit/" + paper._id);
                      }}
                    >
                      <BorderColorOutlinedIcon fontSize="12px" />
                      &nbsp;Edit
                    </Button>

                    {/* publish button */}
                    <Button
                      fontSize="12px"
                      colorScheme="blue"
                      isLoading={isSubmitting}
                      onClick={async () => {
                        setIsSubmitting(true);
                        let url2 =
                          "https://webcrawlers-sih.vercel.app/api/researchpaper/submit/" +
                          paper._id;

                        let response = await fetch(url2, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            "auth-token": sessionStorage.getItem("token"),
                          },
                        });
                        let data = await response.json();
                        if (data.success) {
                          setIsSubmitting(false);
                          toast({
                            title: data.message,
                            status: "success",
                            duration: 1500,
                            isClosable: true,
                            position: "top-right",
                            marginTop: "2rem",
                          });
                          setTimeout(()=>{window.location.reload()},500);
                        } else {
                          setIsSubmitting(false);
                          alert(data.message);
                        }
                      }}
                    >
                      Check Plagiarism
                    </Button>
                    <Button fontSize="12px">SEE PLAGIARISM REPORTS</Button>
                  </ButtonGroup>
                </Flex>
              );
            })}
        </Flex>
      </Flex>
    </>
  );
}

export default Drafts;
