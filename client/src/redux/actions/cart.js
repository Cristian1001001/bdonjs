import ApiService from "../../service/api"
import {SHOPPING_CART,CHANGE_VALUE_CART} from "../types";

export function shopCart(){
    return async dispatch =>{
        try {
            const response = await ApiService.get(`cart/getAll`, {})
            console.log(response);
            dispatch({
                type: SHOPPING_CART,
                payload: response,
            })
        }catch (e) {
            console.log(e)
        }
    }
}
export function changeValue(productId,value,userId){
    return async dispatch =>{
        const item= {
            productId,
            quantity: value,
            userId
        }
        try {
            await ApiService.post('cart/add', {...item})
            dispatch({
                type: CHANGE_VALUE_CART,
                // payload: response.quantity,
            })
        }catch (e) {

        }
    }
}
