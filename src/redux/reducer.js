import { SET_PLAYERS } from './constants'

function reducer(state = {
    players: []
}, action){

    switch(action.type) {
        case SET_PLAYERS:
            return {
                ...state,
                players: action.payload
            };
        // break;

        default:
            return state;
    }
}

export default reducer;