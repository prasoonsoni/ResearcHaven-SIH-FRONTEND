import { Box } from '@chakra-ui/react'
import React from 'react'

function Paper(props) {
  return (
    <Box>
        ID: {props.id}
        TITLE:{props.title}
        Hi
    </Box>
  )
}

export default Paper