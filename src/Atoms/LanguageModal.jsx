import { useContext } from "react";
import EditorContext from "../Contexts/EditorContext";

function LanguageModal(){

    const {editorState, dispatchEditor} = useContext(EditorContext);

    return(
        <>
            <div>
                <select 
                    defaultValue={editorState.language}
                    className="w-xl p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1e1e1e] text-black dark:text-white"
                    onClick={(e) => dispatchEditor({ type: "SET_LANGUAGE", payload: e.target.value })}
                >
                    <option value={"javascript"}>JavaScript</option>
                    <option value={"python"}>Python</option>
                    <option value={"java"}>Java</option>
                    <option value={"cpp"}>C++</option>
                    <option value={"c"}>C</option>
                    <option value={"css"}>CSS</option>
                    <option value={"html"}>HTML</option>
                </select>
            </div>
        </>
    )
}


export default LanguageModal;