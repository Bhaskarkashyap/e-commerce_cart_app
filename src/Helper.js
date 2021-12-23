export const isInCart = (products, product) => {
    return products.find(item => item.id === product.id)
}