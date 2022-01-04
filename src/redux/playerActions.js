import { SET_PLAYERS, ADD_PLAYER, DELETE_PLAYER } from "./constants"

export function fetchPlayers() {
    return (dispatch) => {
        console.log("c")
        fetch("http://localhost:3000/players")
        .then(r => r.json())
        .then(players => {
            console.log('d')
            dispatch({type: SET_PLAYERS, payload: players})
        })
    }
    console.log("e")
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

export function deletePlayer(id) {
    return (dispatch) => {
        fetch(`http://localhost:3000/players/${id}`, {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(playerId => dispatch({type: DELETE_PLAYER, payload: playerId}))
    }
}


