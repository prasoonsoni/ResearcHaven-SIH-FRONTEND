import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Icon from './Icon'

function ListItem(props) {
  return (
    <Flex m={8} align="center" justify="center" gap={4}>
      <Icon/>
        <Text w="50%">
            {props.detail}
        </Text>
    </Flex>
  )
}
export default ListItem