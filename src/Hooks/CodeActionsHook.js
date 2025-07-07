import { useContext } from "react";
import CodeContext from "../Contexts/CodeContext";
import { ExplainCodeReq } from "../Axios/ExplainCodeReq";
import { BugCodeReq } from "../Axios/BugCodeReq";
import PromptContext from "../Contexts/PromptContext";
import { ImproveCodeReq } from "../Axios/ImproveCodereq";
import { AutoCodeReq } from "../Axios/AutoCodeReq";
import UserContext from "../Contexts/UserContext";
import ChatContext from "../Contexts/ChatContext";

function useCodeActions(){
    const { state, dispatch } = useContext(CodeContext); 
    const { authUserState } = useContext(UserContext);
    const {prompt} = useContext(PromptContext); 
    const {chatSelected, setChatSelected} = useContext(ChatContext);

    const setSelectedCode = (code) => {
        dispatch({ type: "SET_SELECTED_CODE", payload: code });
    };

    const setOperation = (operation) => {
        dispatch({ type: "SET_OPERATION", payload: operation });
    };

    const setResult = (result) => {
        dispatch({ type: "SET_RESULT", payload: result });
    };

    const setProgrammingLang = (lang) => {
        dispatch({ type: "SET_PROGRAMMING_LANGUAGE", payload: lang });
    }

    const explainCode = async () => {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
            const res = await ExplainCodeReq(state.selectedCode, state.model, authUserState.user, chatSelected);
            dispatch({ type: "SET_RESULT", payload: res.explanation.response });
            setChatSelected(res.explanation.return_chatId);
            dispatch({ type: "SET_LOADING", payload: false });
        } catch (error) {
            console.error("Error in explainCode:", error);
            dispatch({ type: "SET_ERROR", payload: error.response?.data?.error || "An error occurred while explaining the code." });
        }
    }

    const findBugInCode = async () => {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
            const res = await BugCodeReq(state.selectedCode, prompt, state.model, authUserState.user, chatSelected);
            dispatch({ type: "SET_RESULT", payload: res.data.response });
            setChatSelected(res.data.return_chatId);
            dispatch({ type: "SET_LOADING", payload: false });
        } catch (error) {
            console.error("Error in explainCode:", error);
            dispatch({ type: "SET_ERROR", payload: error.message });
        }
    }

    const improveCode = async () => {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
            if (!state.selectedCode) {
                dispatch({ type: "SET_ERROR", payload: "Please select some code first." });
                return;
            }
            const res = await ImproveCodeReq(state.selectedCode, state.model, authUserState.user, chatSelected);
            dispatch({ type: "SET_RESULT", payload: res.data.response });
            setChatSelected(res.data.return_chatId);
            dispatch({ type: "SET_LOADING", payload: false });
        } catch (error) {
            console.error("Error in improveCode:", error);
            dispatch({ type: "SET_ERROR", payload: error.response?.data?.error || "An error occurred while improving the code." });
        }
    }

    const autoCompleteCode = async() => {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
            const res = await AutoCodeReq(state.selectedCode, prompt, state.model, authUserState.user, chatSelected);
            dispatch({ type: "SET_RESULT", payload: res.data.response });
            setChatSelected(res.data.return_chatId);
            dispatch({ type: "SET_LOADING", payload: false });
        } catch (error) {
            console.error("Error in autoCompleteCode:", error);
            dispatch({ type: "SET_ERROR", payload: error.response?.data?.error || "An error occurred while auto-completing the code." });
        }
    }

    return{
        selectedCode: state.selectedCode,
        operation: state.operation,
        result: state.result,
        error: state.error,
        loading: state.loading, 
        programmingLanguage: state.programmingLanguage,
        setProgrammingLang,
        setResult,
        setOperation,
        setSelectedCode,
        explainCode,
        findBugInCode,
        improveCode,
        autoCompleteCode
    }

}

export default useCodeActions;