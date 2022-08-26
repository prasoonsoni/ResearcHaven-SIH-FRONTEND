import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ShowEntryPoint from "../CommonRoutes/ShowEntryPoint";
import Evaluate from "../ExpertRoute/Evaluate";
import ExpertRoot from "../ExpertRoute/ExpertRoot";

function ExpertDashboard() {
    const navigate = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem('type')==="admin"||sessionStorage.getItem('type')==="user"){
          navigate("/");
        }
      })
  return (
    <Flex direction="column" m={4} flex={1}>
      <Routes>
        <Route path="/" element={<ExpertRoot/>}/>
          {/* EVALUATING PAGE*/}
        <Route exact path="/evaluate" element={<Evaluate/>} />
         {/* DOC SHOW */}
        <Route exact path="/view/:id" element={<ShowEntryPoint />} />
      </Routes>
    </Flex>
  );
}

export default ExpertDashboard;
