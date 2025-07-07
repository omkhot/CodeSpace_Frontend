import { useContext } from "react";
import EditorContext from "../Contexts/EditorContext";

function FontSettingsModal(){

    const {editorState, dispatchEditor} = useContext(EditorContext);

    return(
        <>
            <div className="w-sm ml-auto space-y-2 p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1e1e1e] text-black dark:text-white">
                <div className="flex justify-between">
                    <h1>Font Size: </h1>
                    <select
                        defaultValue={editorState.fontSize}
                        className="p-2 text-black bg-white dark:bg-[#1e1e1e] dark:text-white"
                        onClick={(e) => dispatchEditor({ type: "SET_FONT_SIZE", payload: e.target.value })}
                    >
                        <option value={14}>14</option>
                        <option value={16}>16</option>
                        <option value={18}>18</option>
                        <option value={20}>20</option>
                    </select>
                </div>

                <div className="flex justify-between">
                    <h1>Font Weight: </h1>
                    <select
                        defaultValue={editorState.fontWeight}
                        className="p-2 text-black bg-white dark:bg-[#1e1e1e] dark:text-white"
                        onClick={(e) => dispatchEditor({ type: "SET_FONT_WEIGHT", payload: e.target.value })}
                    >
                        <option value={"normal"}>Normal</option>
                        <option value={"bold"}>Bold</option>
                    </select>
                </div>

                <div className="flex justify-between">
                    <h1>Font Family: </h1>
                    <select
                        defaultValue={editorState.fontFamily}
                        className="p-2 text-black bg-white dark:bg-[#1e1e1e] dark:text-white"
                        onClick={(e) => dispatchEditor({ type: "SET_FONT_FAMILY", payload: e.target.value })}
                    >
                        <option value={"monospace"}>Monospace</option>
                        <option value={"serif"}>Serif</option>
                        <option value={"sans-serif"}>Sans Serif</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default FontSettingsModal;