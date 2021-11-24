function reducer(state = [], action){
    switch(action.type) {
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload
            }
        // break;

        default:
            return state;
    }
}

export default reducer;