export const setPlayer = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/players")
        .then(r => r.json())
        .then(player => dispatch({tpe: 'SET_PLAYER', payload: player}))
    }
}

// fix URL in fetch request


// ({type: 'SET_MESSAGE', payload: message})