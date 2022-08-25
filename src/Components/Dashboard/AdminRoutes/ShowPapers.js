import { Button, Flex } from '@chakra-ui/react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {useNavigate} from "react-router-dom";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import React from 'react'

function ShowPapers() {
  const navigate = useNavigate();
  return (
    <Flex w="100%" h="70vh" direction="column" gap={8} align="center" justify="center">
        <Button colorScheme="green" leftIcon = {<CheckCircleRoundedIcon/>} onClick={()=>{navigate('funded')}}>View Funded Proposals</Button>
        <Button leftIcon = {<ArrowUpwardRoundedIcon />} onClick={()=>{navigate('submitted')}}>Check Submitted Proposals</Button>
    </Flex>
  )
}

export default ShowPapers