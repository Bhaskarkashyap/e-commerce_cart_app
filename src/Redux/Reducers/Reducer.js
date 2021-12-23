// import { removePorduct } from "../Actions/action"
import { actionType } from "../Actions/action.type"
const sumItem = (product) => {
    return {
        itemCount: product.reduce((total, prod) => total + prod.quantity, 0),
        total: product.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
}


const initialState = {
    product: [],
    itemCount: 0,
    total: 0
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_PRODUCT:
            if (!state.product.find(item => item.id === action.payload.id)) {
                state.product.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                product: [...state.product],
                ...sumItem(state.product)

            }

        case actionType.INCREASE_PRODUCT:
            const increment = state.product.findIndex(item => item.id === action.payload.id);
            state.product[increment].quantity++;

            return {
                ...state,
                product: [...state.product],
                ...sumItem(state.product)
            }
        case actionType.DECREASE_PRODUCT:
            const decreament = state.product.findIndex(item => item.id === action.payload.id);
            const decreamentProduct = state.product[decreament];
            if (decreamentProduct.quantity > 1) {
                decreamentProduct.quantity--
            }
            return {
                ...state,
                product: [...state.product],
                ...sumItem(state.product)
            }

        case actionType.REMOVE_PRODUCT:
            const removeProduct = state.product.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                product: [...removeProduct],
                ...sumItem(removeProduct)
            }

        default:
            return state
    }
}