import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
function Stats(props) {
  let count = 1;
  return (
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
          {props.user[1] && (
            <Tr>
              <Th colSpan={3}>
                <Stack>
                  <Skeleton height="25px" />
                  <Skeleton height="25px" />
                </Stack>
              </Th>
            </Tr>
          )}
          {props.user[0]["user"] &&
            props.user[0]["user"]["research_papers"].map((paper) => {
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
  );
}

export default Stats;
