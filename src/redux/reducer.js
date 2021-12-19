import { SET_PLAYERS, ADD_PLAYER } from './constants'

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

        case ADD_PLAYER:

            return {
                ...state,
                players: [...state.players, action.payload]
            };

        default:
            return state;
    }
}