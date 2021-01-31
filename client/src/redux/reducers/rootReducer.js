import {combineReducers} from 'redux'
import login_reducer from "./auth";
import products_reducer from "./products";
import cartReducer from "./cart"

export const rootReducer = combineReducers({
    auth: login_reducer,
    products: products_reducer,
    cart: cartReducer
})
