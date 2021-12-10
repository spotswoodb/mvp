import { SET_PLAYERS } from "./constants"

export const fetchPlayers = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/players")
        .then(r => r.json())
        .then(player => dispatch({tpe: SET_PLAYERS, payload: players}))
    }
}

// fix URL in fetch request


// ({type: 'SET_MESSAGE', payload: message})