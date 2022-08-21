import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import {
  Routes,
  Route,
} from "react-router-dom";
import Stats from "./Stats";
import { Flex } from "@chakra-ui/react";
import Verify from "./Verify";
import EditPaper from "./EditPaper";
function Dashboard() {
  const navigate = useNavigate();
  const user = useFetch(
    "https://webcrawlers-sih.vercel.app/api/user/",
    "GET",
    ""
  );
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <Flex align="center" justify="center" m={4} flex={1}>
      <Routes>
        <Route index element={<Stats user={user}/>} />
        <Route exact path="/edit/:id" element={<EditPaper/>} />
        <Route exact path="/verify" element={<Verify/>} />
        <Route path="/*" element={<>This route does not exist :/</>} />
      </Routes>
    </Flex>
  );
}

export default Dashboard;
