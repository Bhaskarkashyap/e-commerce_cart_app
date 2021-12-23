import React, { useEffect, createContext, useState } from 'react';
import styled from 'styled-components'
export const context = createContext();


const ProductContext = ({ children }) => {

    const [products, setProducts] = useState([])
    const [Loading, setLoading] = useState(true);

    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        setProducts(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (Loading) {
        return (
            <LoadingContainer><h2>Loading....</h2></LoadingContainer>
        )
    }

    return (
        <context.Provider value={{ products: products }}>
            {children}
        </context.Provider>
    )
}

export default ProductContext;

const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
h2{
    font-size: 2rem;
}
`;