import React from 'react'
import {
    AboutContainer,
    Row,
    WrapText,
    ImgSec,
    Section,
    Image
} from './AboutElement';
import { Container } from '../GlobalStyle';
import  image1  from '../../imgz/image-interactive.jpg';

const About = () => {
    return (
        <>
            <AboutContainer>
                <Container>
                        <Row>
                            <ImgSec>
                                <Image src={image1} alt="ddd" />
                            </ImgSec>                        
                            <Section>
                                <WrapText>
                                <h1>THE LEADER IN INTERACTIVE VR</h1>
                                <p>Founded in 2011, Loopstudios has been porducing world-class virtual reality project for some  of the best companies around the globe. our award-winning creations have transformed businesses through digital experience that bind to their brand</p>    
                                </WrapText> 
                            </Section>                    
                        </Row>                  
                </Container>
            </AboutContainer>
            
        </>
    )
}

export default About
