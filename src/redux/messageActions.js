export const setMessage = () => {
    return (dispatch) => {
        fetch("http://localhost:3000")
        .then(r => r.json())
        .then(message => dispatch({tpe: 'SET_MESSAGE', payload: message}))
    }
}

// fix URL in fetch request


// ({type: 'SET_MESSAGE', payload: message})