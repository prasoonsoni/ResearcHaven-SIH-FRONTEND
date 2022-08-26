import React from "react";
import { useFetch } from "../../../Hooks/useFetch";

function Level1Report(props) {
  let url =
    "https://webcrawlers-sih.vercel.app/api/plagiarism/levelOne/" + props.id;
  const { data, isLoading, error } = useFetch(url, "POST");
  return (
    <>
      <div style={{fontSize:"20px"}}><b>Level 1 Report</b></div>
      <div style={{fontSize:"18px"}}>
        <u>Mean Plagiarism Score is : {data.mean}</u>
        <br /><br/>
        <h1>COMPARED WITH : </h1>
        {data &&
          data.data.map((item, index) => {
            return (
              <div key={item.id}>
                <div>
                  {index + 1} CID : {item.id}
                </div>
                <div>SIMILARITY SCORE: {item.plagiarism}</div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Level1Report;
