import React from 'react';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Flex,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function ProfileCard(props) {
    return (
            <Box
                maxW={'270px'}
                w={'200px'}
                bg={useColorModeValue('white', '#171717')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Flex justify={'center'} mt={10}>
                    <Avatar
                        size={'2xl'}
                        src={
                            props.url
                        }
                        alt={'Author'}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {props.name}
                        </Heading>
                        <Text color={'gray.500'} fontSize={"xl"}>{props.description}</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={5}>
                        <a href={props.linkedin} rel="noreferrer" target="_blank">
                            <LinkedInIcon   sx={{ color: "white" ,fontSize:"30px"}} />
                        </a>
                        <a href={props.github} target="_blank" rel="noreferrer">
                            <GitHubIcon sx={{ color: "white", padding: "2px",fontSize:"30px" }} />
                        </a>
                        <a href={props.email} target="_blank" rel="noreferrer">
                            <EmailIcon sx={{ color: "white", padding: "2px",fontSize:"30px" }} />
                        </a>
                    </Stack>

                </Box>
            </Box>
    );
}