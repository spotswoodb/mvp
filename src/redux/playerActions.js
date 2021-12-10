import { SET_PLAYERS } from "./constants"

export function fetchPlayers() {
    return (dispatch) => {
        fetch("http://localhost:3000/players")
        .then(r => r.json())
        .then(players => dispatch({type: SET_PLAYERS, payload: players}))
    }
}



// fix URL in fetch request


// ({type: 'SET_MESSAGE', payload: message})