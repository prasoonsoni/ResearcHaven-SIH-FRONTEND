import {
  Button,
  Divider,
  Flex,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useFetch } from "../../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
function Level2(props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  let url =
    "https://webcrawlers-sih.vercel.app/api/plagiarism/levelTwo/" + props.id;
  const { data, isLoading, error } = useFetch(url, "POST");
  if (error) {
    console.log(error);
  }
  let isOkay = false;
  if (data) {
    for(let i=0;i<data.data.length;i++){
      if(data.data[i].plagiarism>20){
        isOkay = false;
        break;
      }else{
      isOkay = true;}
    }
  }
  const handleSubmit = async () => {
    setIsSubmitting(true);
    let url =
      "https://webcrawlers-sih.vercel.app/api/proposal/submit/" + props.id;
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
    });
    let data = await response.json();
    if (data.success) {
      toast({
        title: "Success",
        description: data.message,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Flex
        width="50vw"
        direction="column"
        gap={8}
        border="2px"
        borderRadius="1.2rem"
        borderColor={
          isLoading
            ? "gray"
            : !props.isRequired
            ? "white"
            : isOkay
            ? "mediumseagreen"
            : "tomato"
        }
        p={4}
      >
        <Text fontSize="3xl" w="100%" align="center">
          LEVEL 2
        </Text>
        {/* DYNAMIC */}
        {/* ICON */}
        {props.isRequired && (
          <Flex align="center" justify="center">
            <ArticleIcon style={{ fontSize: "50px", color: "white" }} />
            {/* DIVIDER AND INFO */}
            <Flex direction="column" align="center" justify="center" gap={2}>
              <Text color={isLoading ? "gray" : "white"}>
                Content Based Matching
              </Text>
              <Flex>
                <Divider w="100px" />
                <Divider w="100px" />
                <Divider w="100px" />
                <Divider w="100px" />
              </Flex>
              {isLoading && <Spinner size="sm" color="gray" />}
              {!isLoading && <>
              Mean Plagiarism Score is : {data.mean}<br/>
              <h1>MATCHED WITH : </h1>
              {data && data.data.map((item,index)=>{
                return <div key={item.id}><div>{index+1} CID : {item.id}</div>
                <div>SIMILARITY SCORE: {item.plagiarism}</div></div>
              })}
              </>}
            </Flex>
            {!isLoading && data && isOkay && (
              <CheckCircleIcon style={{ fontSize: "50px", color: "white" }} />
            )}
            {isLoading && (
              <CheckCircleIcon style={{ fontSize: "50px", color: "gray" }} />
            )}
            {!isLoading && data && !isOkay && (
              <CancelIcon style={{ fontSize: "50px", color: "white" }} />
            )}
          </Flex>
        )}
        {!props.isRequired && (
          <Flex>
            <Flex w="100%" align="center" justify="center">
              Your document has passed this check&nbsp;
              <CheckCircleIcon />
            </Flex>
          </Flex>
        )}
        {/* SUBMISSION */}
        {isOkay && <Button isDisabled={!isOkay} onClick={handleSubmit} isLoading={isSubmitting} loadingText="Submitting...">Go For Submission</Button>}
        {/* SEE REPORT */}
        {!isLoading && (
          <Button
            onClick={() => {
              navigate("/dashboard/report/" + props.id);
            }}
          >
            See Detailed Plagiarism Report
          </Button>
        )}
      </Flex>
    </>
  );
}

export default Level2;
