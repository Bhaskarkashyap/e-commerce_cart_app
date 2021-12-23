import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import styled from 'styled-components';
import CartIcon from '../Cart/CartIcon/CartIcon'

const Header = () => {
    const history = useHistory();
    return (
        <Positions>
            <Container>

                <h1 onClick={() => history.push('/')}>Shooping</h1>
                <Nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                    </ul>
                </Nav>
                <div>
                    <CartIcon />
                </div>

            </Container>
        </Positions>

    )
}

export default Header

const Positions = styled.div`


`;
const Container = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
align-items: center;
width: 100%;
display: flex;
justify-content: space-between;
padding: 10px 40px;
box-shadow: 0 0px 2px 0 rgba(0,0,0,0.2);
background-color: white;

h1{
    font-size: 25px;
    cursor:alias;
}


`;
const Nav = styled.nav`
ul{
    list-style: none;
    li{

    }
}
`;
const NavLink = styled(Link)`
text-decoration: none;
color: black;
font-family: Arial, Helvetica, sans-serif;
`;
