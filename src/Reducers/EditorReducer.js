function EditorReducer(state, action){
    switch(action.type){
        case "SET_FONT_SIZE":
            return {
                ...state,
                fontSize: action.payload
            }
        case "SET_FONT_FAMILY":
            return {
                ...state,
                fontFamily: action.payload
            }
        case "SET_THEME":
            return {
                ...state,
                theme: action.payload
            }
        case "SET_LANGUAGE":
            return {
                ...state,
                language: action.payload
            }    
        case "SET_FONT_WEIGHT":
            return {
                ...state,
                fontWeight: action.payload
            }
        
        default:
            return state;
        }
}

export default EditorReducer;
