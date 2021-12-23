import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components';

const CartIcon = () => {
    const history = useHistory();
    const count = useSelector(state => state.addProducts.itemCount)
    // const total = useSelector(state => state.addProducts.total)
    console.log(count)
    return (
        <CartContainer onClick={() => history.push('/cart')}>

            <img src="/images/shopping-bag.png" alt="" />

            {count > 0 ? <div><span>{count}</span></div> : null}

        </CartContainer>
    )
}

export default CartIcon


const CartContainer = styled.div`
/* display: flex;
justify-content: center;
align-items: flex-end; */
position: relative;
img{
    width: 30px;
}

div{
    background-color: black;
  color: white;
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 9px;
  /* margin-left: -10px; */
  position: absolute;
  right: -5px;
  bottom: -5px;

  span{
      font-size: 12px;
  }
}
`;