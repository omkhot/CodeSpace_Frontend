import { useReducer, useState } from "react";
import { ThemeProvider } from "../Contexts/ThemeContext";
import CodeReducer from "../Reducers/CodeReducer";
import CodeContext from "../Contexts/CodeContext";
import PromptContext from "../Contexts/PromptContext";
import PopUpContext from "../Contexts/PopUpContext";
import UserContext from "../Contexts/UserContext";
import ChatContext from "../Contexts/ChatContext";
import EditorContext from "../Contexts/EditorContext";
import useEditorSettings from "./useEditorSettings";
import { initialState } from "../Utils/initialState";
import useAuthUserActions from "./AuthUserActionsHook";

function AppContextProvider({children}) {

    const {editorState, dispatchEditor} = useEditorSettings();
    const [state, dispatch] = useReducer(CodeReducer, initialState);
    const {authUserState, dispatchAuthUser, validateUser, deleteAccount} = useAuthUserActions();

    const [prompt, setPrompt] = useState("");
    const [popUpVisible, setPopupVisible] = useState(false);   
    const [chatSelected, setChatSelected] = useState(null);
    const [ChatsEditing, setChatsEditing] = useState(0);

    return(
        <>
            <ThemeProvider>
                <EditorContext.Provider value={{editorState, dispatchEditor}}>
                    <CodeContext.Provider value={{state, dispatch}}>
                        <PromptContext.Provider value={{prompt, setPrompt}}>
                            <PopUpContext.Provider value={{popUpVisible, setPopupVisible}}>
                                <UserContext.Provider value={{authUserState, dispatchAuthUser, validateUser, deleteAccount}}>
                                    <ChatContext.Provider value={{chatSelected, setChatSelected, ChatsEditing, setChatsEditing}}>
                                        {children}
                                    </ChatContext.Provider>                                
                                </UserContext.Provider>                            
                            </PopUpContext.Provider>
                        </PromptContext.Provider>
                    </CodeContext.Provider>
                </EditorContext.Provider>
            </ThemeProvider>
        </>
    )
}

export default AppContextProvider;