import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container } from '../GlobalStyle';
import {
    NavBar,
    NavWrap,
    NavBrand,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    Close,
} from './NavElement';


const Navs = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <>
            <NavBar>
                <Container>
                    <NavWrap>
                        <NavBrand>loopstudios</NavBrand>
                        <MobileIcon onClick={handleClick}>
                         <FaBars />
                        </MobileIcon>
                        <NavMenu  click={click}>
                        <Close onClick={handleClick}><FaTimes /></Close>
                                <NavItem>
                                    <NavLinks>About</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks>Careers</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks>Events</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks>Products</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks>Support</NavLinks>
                                </NavItem>
                            </NavMenu>
                        </NavWrap>
                </Container>
            </NavBar>

         </>       
    )
}

export default Navs
    