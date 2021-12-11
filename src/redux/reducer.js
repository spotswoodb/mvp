import { SET_PLAYERS } from './constants'
import { SET_HITS } from './constants'

export default function reducer(state = {
    players: [],
    hits: [],
    loading: false
}, action) {

    switch(action.type) {
        case SET_PLAYERS:

            return  {
                ...state,
                players: action.payload
            };

        case SET_HITS:

            return {
                ...state,
                hits: action.payload
            };

        default:
            return state;
    }
}
