import { SET_HITS } from "./constants"

export function fetchHits() {
    return (dispatch) => {
        fetch("http://localhost:3000/hits")
        .then(r => r.json())
        .then(hits => dispatch({type: SET_HITS, payload: hits}))
    }
}

