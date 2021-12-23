import React, { useContext } from 'react'
import styled from 'styled-components'
import { context } from '../../Context/ProductContext'
// import CartIcon from '../Cart/CartIcon/CartIcon'
import ProductList from './ProductList'



const Product = () => {

    const { products } = useContext(context)
    console.log(products)
    return (
        <div>
            <ProductRenderContainer>
                {products.map(productItem => <ProductList key={productItem.id} {...productItem} />)}

            </ProductRenderContainer>

        </div>
    )
}

export default Product

const ProductRenderContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
flex-wrap: wrap;
`;