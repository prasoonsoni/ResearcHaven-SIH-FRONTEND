import React from 'react'
import { useParams } from 'react-router-dom';
import DocShower from './DocShower';

function ShowEntryPoint(props){
    const params = useParams();
    const cid = params.pathname();
    const headers = [
        "title",
        "researchers",
        "keywords",
        "introduction",
        "problem_statements_and_objectives",
        "literature_review",
        "methodology",
        "bibliography",
      ];
      let url="https://webcrawlers-sih.vercel.app/api/proposal/submitted/"+cid;
    //   call api to get proposals and send to doc shower.
  return (
    <>
    <DocShower headers={headers} document = {props.document}/>
    </>
  )
}

export default ShowEntryPoint