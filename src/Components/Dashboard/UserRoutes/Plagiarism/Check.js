import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useParams } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
import Level1 from "./Level1";
import { Spinner } from "@chakra-ui/react";
// 
function Check() {
  const params = useParams();
  const id = params.id;

  // fetching research paper values from an api
  let url = "https://webcrawlers-sih.vercel.app/api/proposal/draft/"+id;
  const {data,isLoading,error} = useFetch(url,"GET");

  // setting parameter to go to the next level
  const [lvl1,setLvl1] = useState(false);
  const [reject,setReject] = useState(false);

  // setting parameter to set loading
  const [loading,setLoading] = useState(false);
  // template
  let myObj = {
    "og":{},
    "sus": {"sus_title":"","sus_ps_obj":"","sus_introduction":"","sus_keywords":"","sus_proposed_method":""},
    "type":0,"apikey":"AIzaSyBzLQiTsvKVY_HlF7qDn0o7OO-_HD-iyDc"
  }
  // fetching boody of the doucment
  if(data){
    myObj.sus["sus_title"]=data.data.title
    myObj.sus["sus_ps_obj"]=data.data.problem_statement_and_objectives
    myObj.sus["sus_introduction"]=data.data.introduction
    myObj.sus["sus_keywords"]=data.data.keywords
    myObj.sus["sus_proposed_method"]=data.data.methodology
    console.log(myObj)
  }else if(error){
    alert(error);
  }
  url="https://sih-nlp.herokuapp.com/level0googleplagiarism/"
  const handleSubmit = async()=>{
    setLoading(true);
    let response = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(myObj)
    });
    let data = await response.json();
    if(data){
      setLoading(false);
      console.log(data);
      if(data.google_similarity_score>0.3){
        setReject(true);
      }else{setLvl1(true)}
    }else{
      setLoading(false);
    }
  }
  return (
    <>
      <Flex align="center" justify="center" direction="column" gap={8} p={2}>
        <Text fontSize="4xl">PLAGIARISM REPORT</Text>
        {/* LEVEL 0 */}
        <Flex
          direction="column"
          gap={8}
          border="2px"
          w="50vw"
          borderRadius="1.2rem"
          borderColor={
            loading ? "gray" : (data ? (lvl1?"orange":"red"): "white")
          }
          p={4}
        >
          {/* STATIC */}
          <Button onClick={handleSubmit}>Check for Level 0 Plag</Button>
          <Text fontSize="3xl" w="100%" align="center">
            LEVEL 0
          </Text>

          {/* DYNAMIC */}
          {/* ICON */}
          <Flex align="center" justify="center">
            <ArticleIcon style={{ fontSize: "50px", color: "white" }} />

            {/* DIVIDER AND INFO */}
            <Flex direction="column" align="center" justify="center" gap={2}>
              {!loading && (
                <Text>Google API </Text>
              )}
              {loading && <Text color="gray">Preliminary Check</Text>}
              <Flex>
                <Divider w="100px" />
                <Divider w="100px" />
                <Divider w="100px" />
                <Divider w="100px" />
              </Flex>
              {loading && <Spinner size="sm" color="gray" />}
              {!loading && <>
              <div>Mean Similarity {data.google_similarity_score}</div>
              
              </>}
            </Flex>

            {!loading && (
              <CheckCircleIcon style={{ fontSize: "50px", color: "white" }} />
            )}
            {loading && (
              <CheckCircleIcon style={{ fontSize: "50px", color: "gray" }} />
            )}
          </Flex>
    </Flex>

        {/* <Button isDisabled={lvl1} onClick={handleSubmit} isLoading={loading} loadingText="Fetching results...">SUBMIT FOR LEVEL 0</Button> */}
        {/* LEVEL 1 */}
        { lvl1&& <Level1/>}
      </Flex>
    </>
  );
}

export default Check;
