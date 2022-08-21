import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import {
  Routes,
  Route,
} from "react-router-dom";
import Stats from "./Stats";
import { Flex } from "@chakra-ui/react";
function Dashboard() {
  const navigate = useNavigate();
  const user = useFetch(
    "https://webcrawlers-sih.vercel.app/api/user/",
    "GET",
    ""
  );
  console.log(user);
  let myData = { ...user[0] };

  if (user[1] === false) {
    myData = user[0];
    console.log(myData);
  }
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <Flex align="center" justify="center" m={4}>
      <Routes>
        <Route index element={<Stats user={user}/>} />
        <Route exact path="/create" element={<Stats user={user}/>} />
        <Route path="/*" element={<>This route does not exist :/</>} />
      </Routes>
    </Flex>
  );
}

export default Dashboard;
