import {SHOPPING_CART,CHANGE_VALUE_CART} from "../types";

const initialState= {
    data:{

    },
    item:{

    },
}

const cartReducer =(state=initialState, action)=> {
    switch (action.type) {
        case SHOPPING_CART:
            return{
                ...state,
                data: action.payload
            }
        case CHANGE_VALUE_CART:
            return {
                ...state,
                // quantity: action.payload
            }
        default: // need this for default case
            return state
    }
}

export default cartReducer
