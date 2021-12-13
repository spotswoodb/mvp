import { SET_PLAYERS } from './constants'
// import { SET_PLAYER_HITS } from './constants'

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

        // case SET_PLAYER_HITS:

        //     return {
        //         ...state,
        //         playerHits: action.payload
        //     };

        default:
            return state;
    }
}
