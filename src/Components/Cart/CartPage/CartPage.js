import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import Layout from '../../Layout';
import CartItem from './CartItem';
import Total from './Total';


const CartPage = () => {
    const products = useSelector(state => state.addProducts.product);

    // console.log(products)
    return (
        <Layout>
            {
                products.length === 0 ? <Emptycart>Your cart is empty</Emptycart> :
                    <Container>

                        {
                            <ProductViewContainer>
                                {products.map((items) => <CartItem key={items.id} {...items} />)}

                            </ProductViewContainer>
                        }

                        <TotalContainer>
                            <Total />
                        </TotalContainer>
                    </Container>
            }

        </Layout>
    )
}

export default CartPage

const TotalContainer = styled.div`
margin-left: 20px;
/* flex: 10px; */
/* box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
padding: 20px 10px;
margin: 30px 20px; */
flex: 10px;
height: 100px;
`;
const Container = styled.div`
display: flex;
justify-content: space-between;

`;
const ProductViewContainer = styled.div`
flex: 300px;

`;
const Emptycart = styled.h2`
text-align: center;
margin-top:100px;
font-size: 1.2rem;
text-transform: capitalize;
`;