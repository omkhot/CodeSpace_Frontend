function AuthUserReducer(state, action){
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        case "SET_AUTH_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            }
        case "SET_IS_AUTHENTICATED":
            return {
                ...state,
                isAuthenticated: action.payload
            }
        default:
            return state;
    }
}

export default AuthUserReducer;