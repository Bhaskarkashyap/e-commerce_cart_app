import React from 'react'
import styled from 'styled-components'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({ children }) => {
    return (
        <MainContainer>
            <Header />

            <main>
                {
                    children
                }
            </main>

            <Footer />
        </MainContainer>
    )
}

export default Layout


const MainContainer = styled.div`
max-width: 1200px;
/* margin: 0 auto; */
margin: 10px auto;
z-index: 111;

main{
    margin-top: 70px;
}
`;
