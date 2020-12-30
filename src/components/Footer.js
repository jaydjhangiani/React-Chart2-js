import React from 'react'
import styled from 'styled-components'

const Footer = () => {
return (
    <FooterContainer>
        <FooterWrap>
        <SocialLogo>react-chartjs-2 Implementation</SocialLogo>
            <WebsiteRights>Jay Jhangiani © {new Date().getFullYear() }</WebsiteRights>
        </FooterWrap>
    </FooterContainer>
    )
}

export default Footer

export const FooterContainer = styled.footer`
background-color: #1c1c1c;
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
`

export const SocialLogo = styled.h1`
color: white;
justify-self: start;
text-decoration: none;
font-size: 1rem;
display: flex;
align-items: center;
`

export const WebsiteRights = styled.small`
color: white;
margin-top: 5px;
font-weight: 600;
`

