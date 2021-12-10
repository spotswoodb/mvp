import { SET_PLAYERS } from './constants'
import { SET_HITS } from './constants'

export default function reducer(state = {
    players: [],
    hits: []
}, action){

    switch(action.type) {
        case SET_PLAYERS:

            return action.payload;

        case SET_HITS:
            return action.payload;

        default:
            return state;
    }
}
