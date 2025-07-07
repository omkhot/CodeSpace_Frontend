import { useContext } from "react";
import CodeContext from "../Contexts/CodeContext";

function ModelDropDown({}){

    const {state, dispatch} = useContext(CodeContext);

    return(
        <>
            <div className="flex items-center gap-2">
                <label htmlFor="model" className="text-gray-300">Select Model:</label>
                <select 
                    name="model" 
                    id="model" 
                    className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1e1e1e] text-black dark:text-white"
                    onChange={(e) => {
                        console.log("Selected model:", e.target.value);
                        dispatch({ type: "SET_MODEL", payload: e.target.value });
                    }}
                    defaultValue="llama3-8b-8192"
                >
                    <option value="llama3-8b-8192">llama3-8b</option>           
                    <option value="gemma2-9b-it">gemma-9b-it</option>
                </select>
            </div>
        </>
    )
}

export default ModelDropDown;