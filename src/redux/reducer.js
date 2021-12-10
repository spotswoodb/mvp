function reducer(state = [], action){
    switch(action.type) {
        case "SET_PLAYER":
            return {
                ...state,
                player: action.payload
            }
        // break;

        default:
            return state;
    }
}

export default reducer;