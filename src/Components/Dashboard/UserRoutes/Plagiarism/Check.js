import { Box, Button, Divider, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
import Level1 from "./Level1";

function Check() {
  const params = useParams();
  const id = params.id;
  let url = "https://webcrawlers-sih.vercel.app/api/proposal/draft/"+id;
  const {data,isLoading,error} = useFetch(url,"GET");
  const [lvl1,setLvl1] = useState(false);
  const [loading,setLoading] = useState(false);
  // template
  let myObj = {
    "og":{},
    "sus": {"sus_title":"","sus_ps_obj":"","sus_introduction":"","sus_keywords":"","sus_proposed_method":""},
    "type":0,
  }
  // fetching boody of the doucment
  if(data){
    myObj.sus["sus_title"]=data.data.title
    myObj.sus["sus_ps_obj"]=data.data.problem_statement_and_objectives
    myObj.sus["sus_introduction"]=data.data.introduction
    myObj.sus["sus_keywords"]=data.data.keywords
    myObj.sus["sus_proposed_method"]=data.data.methodology
    console.log(myObj);
  }
  // call to the zero level api
  const handleSubmit = async()=>{
    setLoading(true);
    url="https://sih-nlp.herokuapp.com/level0googleplagiarism/"
    let response = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(myObj)
    });
    let data = await response.json();
    if(data){
      console.log(data);
      setLoading(false);
      if(data.google_similarity_score>0.3){
        setLvl1(false);
      }else{setLvl1(true)}
    }else{
      setLoading(false);
      console.log(data.message);
    }
  }

  return (
    <>
      <Flex align="center" justify="center" direction="column" gap={8} p={2}>
        <Text fontSize="4xl">PLAGIARISM REPORT</Text>
        {/* LEVEL 0 */}
        <Button isDisabled={lvl1} onClick={handleSubmit} isLoading={loading} loadingText="Fetching results...">SUBMIT FOR LEVEL 0</Button>
        {/* LEVEL 1 */}
        { lvl1&& <Level1/>}
        { !lvl1&& data &&<>Your code did not pass the check.</>}
      </Flex>
    </>
  );
}

export default Check;
