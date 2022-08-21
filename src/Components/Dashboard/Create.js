import { Flex} from '@chakra-ui/react'
import React from 'react'
import InputElement from './InputElement'

function Create() {
  
  return (
    <Flex w="100vw" align="center" justify="center">
        <Flex h="80vh" w="50%" align="center" justify="center" direction="column">
            <InputElement name="Introduction"/>
        </Flex>
        <Flex w="50%" align="center" justify="center">Show Markdown</Flex>
    </Flex>
  )
}

export default Create