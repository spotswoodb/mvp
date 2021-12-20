import { SET_PLAYERS, ADD_PLAYER } from "./constants"

export function fetchPlayers() {
    return (dispatch) => {
        fetch("http://localhost:3000/players")
        .then(r => r.json())
        .then(players => dispatch({type: SET_PLAYERS, payload: players}))
    }
}

export function createPlayer(player){
    return (dispatch) => {
        fetch("http://localhost:3000/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(player)
        })
        .then(e => e.json())
        .then(p => dispatch({type: ADD_PLAYER, payload: p}))
    }
}

