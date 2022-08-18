import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Icon from './Icon'

function ListItem(props) {
  return (
    <Flex mt={4} align="center" justify="center" gap={4}>
      <Icon/>
        <Text w="55%">
            {props.detail}
        </Text>
    </Flex>
  )
}

export default ListItem