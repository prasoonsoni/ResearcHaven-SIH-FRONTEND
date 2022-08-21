import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Create() {
  return (
    <Flex w="100vw" align="center" justify="center">
        <Flex h="80vh" w="50%" align="center" justify="center" direction="column">
            <Text>Hi</Text>
            <Text>Hi</Text>
        </Flex>
        <Flex w="50%" align="center" justify="center">Show Markdown</Flex>
    </Flex>
  )
}

export default Create