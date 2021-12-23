import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Total = () => {
    const total = useSelector(state => state.addProducts.total)
    const count = useSelector(state => state.addProducts.itemCount)
    const Total = Math.floor(total)
    return (
        <TotalContainer>
            <h2>Quantity : {count}</h2>
            <h2>Total :${Total}</h2>

        </TotalContainer>
    )
}

export default Total

const TotalContainer = styled.div`
z-index: -1;
position: fixed;
margin-left: 20px;
/* flex: 10px; */
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
padding: 20px 10px;
margin: 30px 20px;
flex: 10px;
height: 100px;
width: 400px;

h2{
    margin-top: 10px;
}
`;