import React from 'react'
import { HStack,Button, Show } from '@chakra-ui/react';
function Buttons() {
  return (
    <Show above="md">
      <HStack>
        <Button mr={2} colorScheme='button'>Login</Button>
        <Button colorScheme='blue' variant="outline">Register</Button>
      </HStack>
    </Show>
  )
}

export default Buttons