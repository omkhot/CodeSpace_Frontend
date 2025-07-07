function CodeReducer(state, action){
    switch(action.type){
        case "SET_SELECTED_CODE":
            return {
                ...state,
                selectedCode: action.payload
            };
        case "SET_PROGRAMMING_LANGUAGE":
            return {
                ...state,
                programmingLanguage: action.payload
            };        
        case "SET_OPERATION":
            return {
                ...state,
                operation: action.payload
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            };
        case "SET_RESULT":
            return {
                ...state,
                result: action.payload
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            };
        case "SET_MODEL":
            return {
                ...state,
                model: action.payload
            };
        default:
            return state;
        
    }
}

export default CodeReducer;