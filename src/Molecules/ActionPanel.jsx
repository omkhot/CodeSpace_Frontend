import { useContext } from "react";
import Button from "../Atoms/Buttons";
import useCodeActions from "../Hooks/CodeActionsHook";
import PopUpContext from "../Contexts/PopUpContext";
import PromptBox from "../Organs/PromptBox";
import CodeContext from "../Contexts/CodeContext";

function ActionPanel(){

    const {explainCode, 
        loading, 
        findBugInCode, 
        setOperation, 
        operation, 
        selectedCode, 
        improveCode, 
        autoCompleteCode} = useCodeActions();
    const {state, dispatch} = useContext(CodeContext);

    const {setPopupVisible, popUpVisible} = useContext(PopUpContext);

    return(
        <>
            <div className="w-full flex items-center justify-around gap-2 h-15 p-4 bg-white dark:bg-[#1e1e1e] shadow-lg">
                
                <Button 
                    text={(loading && operation === "explainCode") ? "Loading..." : "Explain Code"} 
                    onClick={() =>{
                        setOperation("explainCode");
                        explainCode();
                    }} 
                    type="explainCode"
                />

                <Button 
                    text={(loading && operation === "findBugInCode") ? "Loading..." : "Find Bugs"}
                    onClick={() => {
                        if (!selectedCode) {
                            dispatch({ type: "SET_ERROR", payload: "Please select some code first." });
                            return;
                        }
                        setOperation("findBugInCode");
                        setPopupVisible(true);
                        
                    }} 
                    type="explainCode" 
                />

                <Button 
                    text={(loading && operation === "autoCode") ? "Loading..." : "Auto complete"} 
                    onClick={() => {   
                        setOperation("autoCode");                     
                        setPopupVisible(true);                        
                    }} 
                    type="explainCode" 

                    />

                <Button 
                    text={(loading && operation === "improveCode") ? "Loading..." : "Improve Code"} 
                    onClick={() => {
                        setOperation("improveCode");
                        improveCode();
                    }} 
                    type="explainCode"             
                />

            </div>

            {popUpVisible && (
                <div>
                    <PromptBox 
                        setPopupVisible={setPopupVisible} 
                        onSubmit={operation == "findBugInCode" ? findBugInCode : autoCompleteCode} />
                </div>
            )}
        </>
    )
}

export default ActionPanel;