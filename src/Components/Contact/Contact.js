import React from 'react'
import ProfileCard from '../Home/ProfileCard'
import { Text,Flex } from "@chakra-ui/react"

function Contact() {
  return (
    <>
      <Text fontSize="4xl" align="center" justify="center" m={10}>
        Contact Us
      </Text>
      <Flex align="center" justify="center" h="" gap={10} m={0} p={0} wrap="wrap">

          <ProfileCard url="https://avatars.githubusercontent.com/u/73957024?v=4" name="Alok Mathur" description="Developer" linkedin="https://www.linkedin.com/in/alok-mathur-5aab4534/" github="https://github.com/alok27a" email="mailto:alok27a@gmail.com" />

          <ProfileCard url="https://avatars.githubusercontent.com/u/77113275?v=4" name="Rishi Kaushal" description="Developer" linkedin="https://www.linkedin.com/in/rishi-kaushal-133246212/" github="https://github.com/sagefell29" email="mailto:rishi29work@gmail.com" />

          <ProfileCard url="https://media-exp1.licdn.com/dms/image/C4D03AQEjKhybOBy4ww/profile-displayphoto-shrink_400_400/0/1656939729241?e=1666828800&v=beta&t=RhL7VM1Sx4QtRNV61jd46-Hq80EeXRN-G2AGsQZtwzU" name="Dhruvil Patel" description="Developer" linkedin="https://www.linkedin.com/in/dhruvil-p237/" github="https://github.com/dhruvil237" email="mailto:dhruvilpatel2372002@gmail.com" />
        {/* <HStack gap={20} >
        </HStack> */}

          <ProfileCard url="https://avatars.githubusercontent.com/u/75159757?v=4" name="Prasoon Soni" description="Developer" linkedin="https://www.linkedin.com/in/prasoonsoni/" github="https://github.com/prasoonsoni" email="mailto:prasoonsoni.work@gmail.com" />

          <ProfileCard url="https://media-exp1.licdn.com/dms/image/C4E03AQH3kh30JroOEA/profile-displayphoto-shrink_400_400/0/1633446214054?e=1666828800&v=beta&t=LexJhwVAUskJEcPZfMWns8Cnqm5x68_zsCRISV3tJ80" name="Jayant Vishnu" description="Developer" linkedin="https://www.linkedin.com/in/jayant-vishnu-nanduri-55445520a/" github="https://github.com/nandurijv" email="mailto:nandurijayant.vishnu2020@vitstudent.ac.in" />

          <ProfileCard url="https://media-exp1.licdn.com/dms/image/C4D03AQHnMrUgPrRyHA/profile-displayphoto-shrink_400_400/0/1653328326648?e=1666828800&v=beta&t=cdAVy0jV1LG2ZQdvMhumewmsAqMO0oGeO1a1iqifryI" name="Vasundhara" description="Developer" linkedin="https://www.linkedin.com/in/vasundhara-polya-518477205/" github="https://github.com/vasundhara1302" email="mailto:vasu.polya13@gmail.com" />
        {/* <HStack  gap={20}>
        </HStack> */}
      </Flex>
    </>
  )
}

export default Contact