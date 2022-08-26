import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import EditPaper from "../UserRoutes/EditPaper/EditPaper";
import Buttons from "../UserRoutes/CreateUpload/Buttons";
import ShowPapers from "../UserRoutes/ShowPapers";
import Drafts from "../Show Papers/PaperTypes/Drafts/Drafts";
import Check from "../UserRoutes/Plagiarism/Check";
import Report from "../UserRoutes/Plagiarism/Report";
import AllSubmittedProposals from "../Show Papers/PaperTypes/Submitted/AlSubmittedProposals";
import ShowEntryPoint from "../CommonRoutes/ShowEntryPoint";
import FundedProposals from "../Show Papers/PaperTypes/Funded/FundedProposals";
function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/");
    }else{
      if(sessionStorage.getItem("type")==="admin"){
        navigate("/dashboard/admin");
      }else if(sessionStorage.getItem("type")==="expert"){
        navigate("/dashboard/expert");
      }
    }
  });
  return (
      <Flex direction="column" m={4} flex={1} >
        <Routes>
          <Route path="/" element={<Buttons />}>
            {/* STANDARD FIRST PAGE */}
            <Route exact path="/" element={<ShowPapers />} />
            {/* To show the drafts of user */}
            <Route exact path="/drafts" element={<Drafts />} />
            {/* To show the drafts of user */}
            <Route exact path="/submitted" element={<AllSubmittedProposals />} />
            {/* To show the drafts of user */}
            <Route exact path="/funded" element={<FundedProposals />} />
            {/* PAGE TO SHOW ALL THE PUBLISHED PAPERS */}
            <Route exact path="/all_funded_proposals" element={<AllSubmittedProposals />} />
          </Route>
          {/* ROUTE TO EDIT THE RESEARCH PAPER */}
          <Route exact path="/edit/:id" element={<EditPaper />} />
          {/* ROUTE TO SHOW PLAGIARISM CHECKING */}
          <Route exact path="/check/:id" element={<Check />} />
          {/* ROUTE TO SHOW A DOC */}
          <Route exact path="/view/:id" element={<ShowEntryPoint />} />
          {/* PAGE TO SHOW ALL THE REPORT FOR ALL SUBMITTED PAPERS */}
          <Route exact path="/report/:id" element={<Report />} />
        </Routes>
      </Flex>
  );
}

export default Dashboard;
