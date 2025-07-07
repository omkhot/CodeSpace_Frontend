import { useEffect, useReducer } from "react";
import EditorReducer from "../Reducers/EditorReducer";

const defaultEditorSettings = {
    theme: "vs-dark",
    language: "javascript",
    fontSize: 14,
    fontWeight: "normal",
    fontFamily: "monospace",
    automaticLayout: true,
    minimap: { enabled: false },
};

const getInitialEditorSettings = () => {
    const saved = localStorage.getItem("editorSettings");
    return saved ? JSON.parse(saved) : defaultEditorSettings;
};

function useEditorSettings() {

    const [editorState, dispatchEditor] = useReducer(EditorReducer, getInitialEditorSettings());

    useEffect(() => {
        localStorage.setItem("editorSettings", JSON.stringify(editorState));
    }, [editorState]);

    return { editorState, dispatchEditor };
}

export default useEditorSettings;