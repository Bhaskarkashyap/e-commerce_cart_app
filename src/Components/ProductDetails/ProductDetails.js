import React, { useContext, useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { context } from '../../Context/ProductContext';
// import { isInCart } from '../../Helper';
// import { addProduct, increaseProduct } from '../../Redux/Actions/action';
import { AddCartButton, CheckOutButton } from '../ButtonGlobal';
import Layout from '../Layout';


const ProductDetails = () => {

    const { id } = useParams();
    const { products } = useContext(context)
    // console.log(products.id)
    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(() => {
        const product = products.find(innerProduct => Number(innerProduct.id) === Number(id));
        setSingleProduct(product)

    }, [id, products])

    if (!singleProduct) return null;
    const { title, image, description, price } = singleProduct;
    return (
        <Layout>
            <ContainerDiv>
                <ImageContainer>
                    <img src={image} alt="something" />
                </ImageContainer>
                <DetailsContent>
                    <Title>{title}</Title>
                    <Price>{price}</Price>
                    <ButtonContainer>
                        <AddCartButton {...singleProduct} />
                        <CheckOutButton />
                    </ButtonContainer>
                    <Description>{description}</Description>
                </DetailsContent>
            </ContainerDiv>
        </Layout>
    )
}

export default ProductDetails


const ContainerDiv = styled.div`
width: 100%;
max-width: 80%;
height: calc( 100vh - 90px);
margin: 0 auto;
/* border: 1px solid black; */
display: flex;
justify-content: center;
align-items: center;
`;

const ImageContainer = styled.div`

img{
    /* border: 1px solid gray; */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    padding: 20px;
    width: 250px;
}
`;
const DetailsContent = styled.div`
/* width: 100%; */
max-width: 40%;
/* margin: 10px auto; */
margin: 10px 30px;

`;
const Title = styled.div`
font-weight: bold;
font-size: 1.5rem;
margin-bottom: 10px;
`;
const Price = styled.p`
margin-bottom: 30px;
`;
const Description = styled.p`
line-height: 1.2;
margin-top: 20px;
font-size: 15px;
`;
const ButtonContainer = styled.p`
& > button {
    width: 100%;
    margin: 5px 0;

}
`;

