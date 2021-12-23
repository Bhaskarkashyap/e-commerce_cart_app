import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { isInCart } from "../Helper";
import { addProduct, increaseProduct } from "../Redux/Actions/action";

export const AddCartButton = (product) => {

    const products = useSelector(state => state.addProducts.product);
    const dispatch = useDispatch()


    return (
        <>
            {!isInCart(products, product) && <AddcartButton onClick={() => dispatch(addProduct(product))}>Add to cart</AddcartButton>}
            {isInCart(products, product) && <AddMoreBtn onClick={() => dispatch(increaseProduct(product))}>Add More</AddMoreBtn>}

        </>
    )
}

export const CheckOutButton = () => {
    return (
        <>
            <CheckOutBtn>PROCEED TO CHECKOUT</CheckOutBtn>
        </>
    )
}


const AddcartButton = styled.button`
padding: 10px 10px;
background-color: black;
color: white;
border: none;
outline: none;
cursor: pointer;
transition: 0.2s ease-in-out;
text-transform: uppercase;

`;

const CheckOutBtn = styled(AddcartButton)``;

const AddMoreBtn = styled.button`
background-color: white;
color: black;
border: none;
outline: none;
cursor: pointer;
transition: 0.2s ease-in-out;
padding: 10px 10px;
border: 1px solid black;
text-transform: uppercase;
`;