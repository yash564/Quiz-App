import React from 'react';
import Nav from './Nav';
import Container from './Container';
import Boxes from './Boxes';
import Section from "./Section";
import QuizBox from './QuizBox';
import About from './About';

const Homepage = () => {
    return ( 
        <React.Fragment>
            <Nav></Nav>
            <Container></Container>
            <Boxes></Boxes>
            <Section></Section>
            <QuizBox></QuizBox>
            <About></About>
        </React.Fragment>
    );
}
 
export default Homepage;