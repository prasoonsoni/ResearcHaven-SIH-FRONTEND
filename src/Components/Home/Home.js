import React from 'react'
import Intro from './Intro'
import FormComponent from './FormComponent';
import { Flex } from '@chakra-ui/react';

function Home(props) {
  return (
    <Flex direction={{base:'column',md:'row'}}>
      <Intro/>
      <FormComponent showLoginForm={props.showLoginForm} setShowRegForm={props.setShowRegForm} setShowLoginForm={props.setShowLoginForm} showRegForm={props.showRegForm}/>
    </Flex>
  )
}
export default Home

