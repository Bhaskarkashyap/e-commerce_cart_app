import { actionType } from "./action.type"


export const addProduct = (product) => {
    return {
        type: actionType.ADD_PRODUCT,
        payload: product,
    }
}

export const increaseProduct = (product) => {
    return {
        type: actionType.INCREASE_PRODUCT,
        payload: product
    }
}

export const decreaseProduct = (product) => {
    return {
        type: actionType.DECREASE_PRODUCT,
        payload: product
    }
}

export const removePorduct = (product) => {
    return {
        type: actionType.REMOVE_PRODUCT,
        payload: product,
    }
}