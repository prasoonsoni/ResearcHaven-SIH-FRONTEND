import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useFetch } from "../../../Hooks/useFetch";
import Pdf from 'react-to-pdf'
function Level2Report(props) {
  const ref = React.createRef();
  let url =
    "https://webcrawlers-sih.vercel.app/api/plagiarism/levelTwo/" + props.id;
  const { data, isLoading, error } = useFetch(url, "POST");
  console.log(data);
  return (<>
  <Pdf targetRef={ref} filename="report.pdf">
            {({ toPdf }) => <Button colorScheme='blue' onClick={toPdf}>Generate Pdf</Button>}
          </Pdf>
    <Flex direction="column" ref={ref} bg="white" color="black" borderRadius="2rem" border="2px" p={4}>
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
    </Flex></>
  );
}

export default Level2Report;
