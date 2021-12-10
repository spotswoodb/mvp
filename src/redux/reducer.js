import { SET_PLAYERS } from './constants'

export default function reducer(state = [], action){

    switch(action.type) {
        case SET_PLAYERS:

            return action.payload;

        default:
            return state;
    }
}
