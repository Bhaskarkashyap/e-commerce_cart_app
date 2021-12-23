import { combineReducers } from "redux";
import { productReducer } from "./Reducer";

const reducer = combineReducers({
    addProducts: productReducer,
}
)
export default reducer