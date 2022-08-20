import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
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
  let count = 1;
  return (
    <Flex align="center" justify="center" m={4}>
      <TableContainer w="50%">
        <Table size="sm" variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>Research Paper ID</Th>
              <Th isNumeric>Verified</Th>
            </Tr>
          </Thead>
          <Tbody>
            {user[1] && (
              <Tr>
                <Th colSpan={3}>
                <Stack>
                <Skeleton height="25px"/>
                <Skeleton height="25px"/>
                </Stack></Th>
              </Tr>
            )}
            {myData["user"] &&
              myData["user"]["research_papers"].map((paper) => {
                if (paper) {
                  return (
                    <Tr key={paper}>
                      <Td>{count++}</Td>
                      <Td>{paper}</Td>
                      <Td isNumeric>{paper}</Td>
                    </Tr>
                  );
                } else {
                  return <></>;
                }
              })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default Dashboard;
