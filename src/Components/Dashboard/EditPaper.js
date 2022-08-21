import { Flex, Heading} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
function EditPaper() {
  const params = useParams();
  const id = params.id;
  
  return (
    <Flex w="100vw" align="center" justify="center">
        <Flex h="80vh" w="50%" align="center" justify="center" direction="column">
          <Heading>{id}</Heading>
        </Flex>
        <Flex w="50%" align="center" justify="center">Show Markdown</Flex>
    </Flex>
  )
}

export default EditPaper