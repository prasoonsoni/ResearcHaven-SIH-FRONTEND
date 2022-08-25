import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FundedProposals from '../AdminRoutes/FundedProposals';
import ShowPapers from  '../AdminRoutes/ShowPapers';
import SubmittedProposals from '../AdminRoutes/SubmittedProposals';
function UGCDashboard() {
  return (

    <Routes>
      {/* first thing to show */}
      <Route path="/" element={<ShowPapers/>}/>
      {/* funded projects list */}
      <Route path="/funded" element={<FundedProposals/>}/>
      {/* Submitted projects */}
      <Route path="/submitted" element={<SubmittedProposals/>}/>
    </Routes>
  )
}

export default UGCDashboard