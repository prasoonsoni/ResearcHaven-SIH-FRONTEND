import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Text,
  VStack,
  Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function FundedProposals() {

  const baseUrl = "https://webcrawlers-sih.vercel.app/api/funding/";
  const [data, setData] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${baseUrl}`, {
        method: 'GET'
      }).then((response) => {
        response.json().then((json) => {
          // console.log(json.data)
          setData(json.data)
        })
      }).catch(error => {
        console.log(error)
      })
    }
    fetchData()
    console.log(data)
  }, [data])

  return (
    <>
      <VStack align="center" justify="center">
        <Text fontSize="2xl" fontWeight="bold">
          All Funded Proposal
        </Text>
        <TableContainer>
          <Table variant='striped' colorScheme='teal' p={20} size='md'>
            <TableCaption>Research Proposal Ended</TableCaption>
            <Thead>
              <Tr colorScheme="black">
                <Th>Cid</Th>
                <Th>Title</Th>
                <Th>Open In New Tab</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data && data.map((item, i) => (
                <Tr>
                  <Th>{item.cid}</Th>
                  <Th>{item.title.slice(0, 60)}...</Th>
                  <Th>
                    <Button padding='5' onClick={() => { navigate("/dashboard/admin/view/"+item.cid); }}>
                      Open
                    </Button>
                  </Th>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>

    </>
  )
}

export default FundedProposals