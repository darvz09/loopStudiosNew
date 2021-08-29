import React from 'react'
import { FaTwitter, FaPinterest, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { Container } from './../GlobalStyle';
import {
    FooterContainer,
    WrapRow,
    ColItem,
    ColItem2,
    SocialLogo,
    FooterMEnu,
    FooterItem,
    FooterLinks,
    SocialIcon,
    SocialIconLinks,
    WebsiteRights
} from './FooterELements';
const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <WrapRow>
                    <ColItem>
                        <SocialLogo>loopstudios</SocialLogo>
                        <FooterMEnu>
                            <FooterItem>
                                <FooterLinks>About</FooterLinks>
                            </FooterItem>
                            <FooterItem>
                                <FooterLinks>Careers</FooterLinks>
                            </FooterItem>
                            <FooterItem>
                                <FooterLinks>Events</FooterLinks>
                            </FooterItem>
                            <FooterItem>
                                <FooterLinks>Products</FooterLinks>
                            </FooterItem>
                            <FooterItem>
                                <FooterLinks>Support</FooterLinks>
                            </FooterItem>
                        </FooterMEnu>
                    </ColItem>
                    <ColItem2>
                        <SocialIcon>
                            <SocialIconLinks>
                                <FaFacebookSquare />
                            </SocialIconLinks>
                            <SocialIconLinks>
                                <FaTwitter />
                            </SocialIconLinks>
                            <SocialIconLinks>
                                <FaPinterest />
                            </SocialIconLinks>
                            <SocialIconLinks>
                                <FaInstagram />
                            </SocialIconLinks>
                        </SocialIcon>
                        <WebsiteRights>© 2020 Loopstudios. All rights reserved.</WebsiteRights>
                    </ColItem2>

                </WrapRow>
            </Container>
            
            
        </FooterContainer>
    )
}

export default Footer
