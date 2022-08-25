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
  VStack
} from '@chakra-ui/react'
import { Button } from 'react-bootstrap';

function FundedProposals() {

  const baseUrl = "https://webcrawlers-sih.vercel.app/api/funding/";
  const [data, setData] = useState([])

  const navigateNewTab = () =>{
    
  }

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
  }, [])

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
              {data.map((item, i) => (
                <Tr>
                  <Th>{item.cid}</Th>
                  <Th>{item.title.slice(0, 60)}...</Th>
                  <Th>
                    <Button padding='5'onClick={()=>{navigateNewTab();}}>
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