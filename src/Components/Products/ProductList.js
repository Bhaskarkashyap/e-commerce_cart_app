import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { AddCartButton } from '../ButtonGlobal';
// import Product from './Product';

const ProductList = (product) => {

    const history = useHistory()
    // console.log(product)
    const { title, image, price, id } = product;
    return (
        <>
            <Cardcontainer>
                <div onClick={() => history.push(`/product/${id}`)}>
                    <img src={image} alt="" />
                </div>
                <span>{title}</span>
                <Div>
                    <AddCartButton {...product} />
                    <span>${price}</span>
                </Div>
            </Cardcontainer>
        </>
    )
}

export default ProductList


const Cardcontainer = styled.div`
box-shadow: 0 0px 2px 0 rgba(0,0,0,0.2);
/* border: 1px solid rgba(0,0,0,0.2); */
/* max-width: 300px; */
margin: 20px 12px;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
box-sizing: border-box;
/* position: relative; */
div{
    width: 250px;
height: 250px;
  padding:15px;
  /* background-color: red; */
    img{
       width: 100%;
       height: 100%;
       object-fit: contain;
       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
       padding: 20px;
    }
}
span{
    font-size: 14px;
    padding: 5px 5px;
}
`;

const Div = styled.article`
width: 95%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;

`;


