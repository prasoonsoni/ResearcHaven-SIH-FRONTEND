import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import EditPaper from "../UserRoutes/EditPaper/EditPaper";
import Buttons from "../UserRoutes/CreateUpload/Buttons";
import ShowPapers from "../Show Papers/ShowPapers";
import AllPublishedPapers from "../Show Papers/PaperTypes/AllPublishedProposals";
import Drafts from "../Show Papers/PaperTypes/Drafts/Drafts";
function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/");
    }else{
      if(sessionStorage.getItem("type")==="admin"){
        navigate("/dashboard/admin");
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
            <Route exact path="/submitted" element={<AllPublishedPapers />} />
            {/* To show the drafts of user */}
            <Route exact path="/funded" element={<AllPublishedPapers />} />
            {/* PAGE TO SHOW ALL THE PUBLISHED PAPERS */}
            <Route exact path="/all_funded_papers" element={<AllPublishedPapers />} />
          </Route>
          <Route exact path="/edit/:id" element={<EditPaper />} />
        </Routes>
      </Flex>
  );
}

export default Dashboard;
