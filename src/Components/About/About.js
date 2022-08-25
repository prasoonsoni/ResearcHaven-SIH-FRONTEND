import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../About/about.css'
import {
  Text,
  Box
} from "@chakra-ui/react";

function About() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  
  return (
    <>
      <div>
        <Text
          textAlign="center"
          fontFamily="Roboto"
          fontWeight="900"
          padding="5"
          fontSize={{ base: "2xl", lg: "3xl" }}
        >
          Our Idea
        </Text>
      </div>
      <Box paddingLeft={10} paddingRight={10} borderRadius={10} border={2} borderColor="white" >
        <Slide >
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[0]})` }}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[1]})` }}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${images[2]})` }}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </Box>
    </>
  );
}

export default About