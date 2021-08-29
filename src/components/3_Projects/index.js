import React, {useState} from 'react';
import { Container, Button, Button1 } from '../GlobalStyle';
import {
    EventContainer,
    WrapEvents,
    TitleSec,
    EventList,
    EvCard,
    EvImg,
    EvImg2,
    EvDescp,
    MobileButton,

} from './ProjectElements'

const Projects = ({ data }) => {
    const [visible, setVisible] = useState(8)
    const showItems = () => {
        setVisible((values) => values + 8);
    }
    const [hideButton, setHideButton] = useState(true)
    const handle = () =>  setHideButton(!hideButton)
    return (
        <>
            <EventContainer>
                <Container>
                    <WrapEvents>
                        <TitleSec>OUR CREATIONS</TitleSec>
                        <Button onClick={showItems}>SEE ALL</Button>
                        
                    </WrapEvents>
                    <EventList>
                        {data.slice(0, visible).map((proj, index) => {
                            return (
                                
                                <EvCard Key={index}>
                                    <EvImg src={proj.img} alt={proj.alt} />
                                    <EvImg2 src={proj.img2} alt={proj.alt} />
                                     <EvDescp>
                                        <p>{proj.Desc}</p>
                                        <p>{proj.Desc1}</p>
                                    </EvDescp>                                    
                                </EvCard>
                                

                                
                                       
                            )
                        })}
                        <MobileButton onClick={handle}>
                             { hideButton? <Button1 onClick={showItems}>SEE ALL</Button1> : null}
                        </MobileButton>
                        
                    </EventList>
                    
                </Container> 
            </EventContainer>

            

        </>
    )
}

export default Projects;
