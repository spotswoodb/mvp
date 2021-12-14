import { SET_PLAYERS } from './constants'

export default function reducer(state = {
    players: [],
    loading: false
}, action) {

    switch(action.type) {
        case SET_PLAYERS:

            return  {
                ...state,
                players: action.payload
            };

        default:
            return state;
    }
}