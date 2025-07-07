import { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import PromptContext from "../Contexts/PromptContext";

function PromptBox({ setPopupVisible, onSubmit }) {

    const { prompt, setPrompt } = useContext(PromptContext);

    return(
        <>
            <div className="w-2xl absolute top-1/2 right-10 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 bg-white dark:bg-[#1e1e1e] rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
                <div className="flex border-b-2 border-gray-300 dark:border-gray-700 pb-2 dark:text-white">
                    <h1>Would you like to add any refernce or context regarding the code?</h1>
                    <RxCrossCircled className="ml-auto cursor-pointer text-lg" onClick={() => {setPopupVisible(false)}}/>
                </div>

                <div className="mt-4">
                    <textarea 
                        className="w-full h-32 p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-[#252526] text-black dark:text-white"
                        placeholder="Type your prompt here...(Optional)"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    ></textarea>
                </div>

                <div className="mt-4 flex justify-end">
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        onClick={() => {
                            console.log("Prompt submitted:", prompt);
                            setPopupVisible(false);
                            onSubmit();
                            setPrompt("");                            
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default PromptBox;