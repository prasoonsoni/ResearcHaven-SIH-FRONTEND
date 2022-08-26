import React, { useEffect, useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";

function Level0Report(props) {
  const [loading, setLoading] = useState(false);
  const [data1, setData1] = useState(false);
  let url = "https://webcrawlers-sih.vercel.app/api/proposal/draft/" + props.id;
  useEffect(() => {
    let fetchData = async ()=>{
    let response = fetch(url,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("token")
        }
      });
      let data = await response.json();
      if(data){
        console.log(data);
      }
    }
    fetchData();
  })
  // to send to the backend.
  let myObj = {
    "og":{},
    "sus": {
      "sus_title": "",
      "sus_ps_obj": "",
      "sus_introduction": "",
      "sus_keywords": "",
      "sus_proposed_method": ""
    },
    "type": 0,
    "apikey": "AIzaSyBFz93EhgN2_lOXTSEec26Cc-uja0Tr-9g"
  };
  // fetching boody of the doucment
  // if (data) {
  //   myObj.sus["sus_title"] = data.data.title;
  //   myObj.sus["sus_ps_obj"] = data.data.problem_statement_and_objectives;
  //   myObj.sus["sus_introduction"] = data.data.introduction;
  //   myObj.sus["sus_keywords"] = data.data.keywords;
  //   myObj.sus["sus_proposed_method"] = data.data.methodology;
  // } else if (error) {
  //   alert(error);
  // }

  // let url2 = "https://sih-nlp.herokuapp.com/level0googleplagiarism/";
  
  return (
    <>
      <div style={{fontSize:"20px"}}><b>Level 0 Report</b></div>
      {data1 && (
        <>
          <div style={{fontSize:"18px"}}>
            MEAN GOOGLE SIMILARITY SCORE: {data1.google_similarity_score}
          </div>
        </>
      )}
    </>
  );
}

export default Level0Report;
