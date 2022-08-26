import React from "react";
import { useFetch } from "../../../Hooks/useFetch";

function Level2Report(props) {
  let url =
    "https://webcrawlers-sih.vercel.app/api/plagiarism/levelTwo/" + props.id;
  const { data, isLoading, error } = useFetch(url, "POST");
  console.log(data);
  return (
    <>
      <div style={{fontSize:"20px"}}><b>Level 2 Report</b></div>
      <div>
      <br />Mean Plagiarism Score is : {data.mean}<br />
        <br />
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

export default Level2Report;
