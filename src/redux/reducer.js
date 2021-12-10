import { SET_PLAYERS } from './constants'

function reducer(state = [], action){

    switch(action.type) {
        case SET_PLAYERS:
            return {
                ...state,
                player: action.payload
            };
        // break;

        default:
            return state;
    }
}

export default reducer;