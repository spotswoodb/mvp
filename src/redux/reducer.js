import { SET_PLAYERS, ADD_PLAYER, DELETE_PLAYER } from './constants'

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

        case DELETE_PLAYER:
            const newPlayers = state.players.filter(p => p.id !== action.payload)
            
            return {
                ...state,
                players: newPlayers
            }

        default:
            return state;
    }
}