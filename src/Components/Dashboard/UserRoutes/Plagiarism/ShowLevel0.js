import React from "react";
import { useFetch } from "../../../Hooks/useFetch";

function ShowLevel0(props) {
  let myObj = {
    og: {},
    sus: {
      sus_title: "",
      sus_ps_obj: "",
      sus_introduction: "",
      sus_keywords: "",
      sus_proposed_method: "",
    },
    type: 0,
    apikey: "AIzaSyBzLQiTsvKVY_HlF7qDn0o7OO-_HD-iyDc",
  };
  // fetching boody of the doucment
  let url = "https://sih-nlp.herokuapp.com/level0googleplagiarism/";
  console.log(props);
  myObj.sus["sus_title"] = props.document.title;
  myObj.sus["sus_ps_obj"] = props.document.problem_statement_and_objectives;
  myObj.sus["sus_introduction"] = props.document.introduction;
  myObj.sus["sus_keywords"] = props.document.keywords;
  myObj.sus["sus_proposed_method"] = props.document.methodology;
  console.log(myObj);
  const { data, isLoading, error } = useFetch(url, "POST", myObj);
  
  console.log(data);
  return (
  <div>ShowLevel0</div>
  )
}

export default ShowLevel0;
