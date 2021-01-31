import { ON_SEACRH} from "../types";


export function on_search(search){
    return  async dispatch => {
        search = search.toLowerCase()
            dispatch({
                type: ON_SEACRH,
                payload: search,
            })

    }

}
