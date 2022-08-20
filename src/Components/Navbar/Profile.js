import React from 'react'
import { WrapItem, Wrap, Avatar,Tooltip } from '@chakra-ui/react';

function Profile() {
    const token = sessionStorage.getItem('token');
    return (
        <>
        {token && (
          <Wrap>
            <WrapItem>
            <Tooltip borderRadius="2px" label='Guest' hasArrow arrowSize={10}>
              <Avatar
                name="Guest"
              />
              </Tooltip>
            </WrapItem>
          </Wrap>
      )
    }
        </>
    );
}

export default Profile