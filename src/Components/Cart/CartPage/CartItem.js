import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { decreaseProduct, increaseProduct, removePorduct } from '../../../Redux/Actions/action';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// import Total from './Total';

const CartItem = (product) => {
    const dispatch = useDispatch()
    console.log(product)
    const { title, quantity, image, price } = product;
    return (
        <AllContainer>
            <DivContainer>
                <ImageContainer>
                    <img src={image} alt="" />
                </ImageContainer>
                <h2>{title}</h2>
                <Price>{price}</Price>
                <Quantity>quantity : {quantity}</Quantity>

                <ButtonContainer>
                    <button onClick={() => dispatch(increaseProduct(product))}>+</button>
                    {
                        quantity === 1 && <button onClick={() => dispatch(removePorduct(product))}><DeleteOutlinedIcon /></button>
                    }
                    {
                        quantity > 1 && <button onClick={() => dispatch(decreaseProduct(product))}>-</button>
                    }
                </ButtonContainer>
            </DivContainer>


        </AllContainer>
    )
}

export default CartItem

const AllContainer = styled.div`
display: flex;
justify-content: space-between;
/* align-items: center; */
`;

const DivContainer = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
padding: 10px 10px;
display: flex;
align-items: center;
justify-content: space-around;
margin: 35px 0;
flex:300px;

h2{
    width: 200px;
    margin: 0 10px;
    font-size: 15px;
}
`;
const ImageContainer = styled.div`
img{
    width: 100px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 15px;
}
`;

const Price = styled.div`
  
`;
const Quantity = styled.div`

  
`;
const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
  button{
    width: 40px;
    height: 40px;
    font-size: 2rem;
     margin-right: 10px;
     border-radius: 100%;
     cursor: pointer;
     display: flex;
     justify-content: center;
     align-items: center;
  }
`;