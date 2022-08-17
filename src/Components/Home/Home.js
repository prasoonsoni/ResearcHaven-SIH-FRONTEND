import React from 'react'
import Intro from './Intro'
import FormComponent from './FormComponent';
import { Flex } from '@chakra-ui/react';

function Home() {
  return (
    <Flex direction={{base:'column',md:'row'}}>
      <Intro/>
      <FormComponent/>
    </Flex>
  )
}

export default Home

