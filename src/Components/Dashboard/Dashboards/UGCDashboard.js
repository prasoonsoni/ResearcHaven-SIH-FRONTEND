import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import FundedProposals from '../AdminRoutes/FundedProposals';
import ShowPapers from  '../AdminRoutes/ShowPapers';
import SubmittedProposals from '../AdminRoutes/SubmittedProposals';
import ShowEntryPoint from '../CommonRoutes/ShowEntryPoint';
function UGCDashboard() {
  const navigate = new useNavigate();
  useEffect(()=>{
    if(sessionStorage.getItem('type')!=="admin"){
      navigate("/");
    }else if(sessionStorage.getItem('type')!=="admin"){
      navigate("/");
    }
  })
  return (

    <Routes>
      {/* first thing to show */}
      <Route path="/" element={<ShowPapers/>}/>
      {/* funded projects list */}
      <Route path="/funded" element={<FundedProposals/>}/>
      {/* Submitted projects */}
      <Route path="/submitted" element={<SubmittedProposals/>}/>
      {/* To show a document */}
      <Route exact path="/view/:id" element={<ShowEntryPoint />} />
    </Routes>
  )
}

export default UGCDashboard