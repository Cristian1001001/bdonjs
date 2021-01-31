import {ON_SEACRH} from "../types";

const initialState = {
    search: '',
}

const products_reducer =(state=initialState, action)=> {
    switch (action.type) {
        case ON_SEACRH:
            return{
                ...state,
                search: action.payload
            }
        default: // need this for default case
            return state
    }
}


export default products_reducer
