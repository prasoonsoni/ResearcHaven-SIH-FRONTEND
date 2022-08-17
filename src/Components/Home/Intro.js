import { Flex, Text } from '@chakra-ui/react'
import React from 'react';
import SihLogo from './SihLogo';
import WebCrawler from './WebCrawler';
function Intro() {
  return (
    <Flex mt={4} borderRight='1px' p={4}gap='2rem' w='100%' h='80vh' direction="column" alignItems="center" justifyContent="center">
        <SihLogo/>
        <Text textAlign="center" fontFamily='Roboto' fontWeight='900' fontSize={{base:'2xl', lg:'3xl'}}>
            for SIH 2022
        </Text>
        <Text textAlign="center" fontFamily='Rubik' fontWeight='800' fontSize={{base:'4xl', lg:'6xl'}}>
            PLAGIARISM CHECKER
        </Text>
        <WebCrawler/>
        <Text textAlign="center" fontFamily='Poppins' fontWeight='500' fontSize={{base:'2xl', lg:'3xl'}}>
            a <u><span style={{letterSpacing:'0.3rem'}}>webCrawling</span></u> project
        </Text>
    </Flex>
  )
}

export default Intro