import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Verify from "./Verify";
import EditPaper from "./EditPaper";
import Manage from "./Manage";
function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <Flex align="center" justify="center" m={4} flex={1}>
      <Routes>
        <Route index element={<Manage/>} />
        <Route exact path="/edit/:id" element={<EditPaper/>} />
        <Route exact path="/verify" element={<Verify/>} />
        <Route path="/*" element={<>This route does not exist :/</>} />
      </Routes>
    </Flex>
  );
}

export default Dashboard;
