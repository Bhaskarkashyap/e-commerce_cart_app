import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            2021 @ shopping store
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
text-align: center;
margin-top: 20px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight: 200;
`;