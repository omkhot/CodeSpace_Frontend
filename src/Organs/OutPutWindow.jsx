import Loader from "../Atoms/Loaders";
import useCodeActions from "../Hooks/CodeActionsHook";
import ReactMarkdown from "react-markdown";
function OutPutWindow(){

    const {result, loading} = useCodeActions();

    if (loading) {
        return (
            <div className="w-full h-[85vh] relative p-4 border-2 border-green-950 rounded-lg bg-white dark:bg-[#1e1e1e] dark:border-green-700 shadow-lg">
                <div className="border-b-2 border-green-950 pb-2 dark:border-white mb-4">
                    <h1 className="text-lg font-bold text-black dark:text-white">Output Window</h1>
                </div>
                <div className="absolute flex items-center justify-center gap-5 bg-gray-100 dark:bg-[#252526] rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400">Loading...</p>
                    <Loader />
                </div>
            </div>
        );  
    }

    return(
        <>
            <div className="w-full h-[100%] p-4 border-2 border-green-950 rounded-lg bg-white dark:bg-[#1e1e1e] dark:border-green-700 shadow-lg">
            
                <div className="border-b-2 border-green-950 pb-2 dark:border-white mb-4">
                    <h1 className="text-lg font-bold text-black dark:text-white">Output Window</h1>
                </div>

                <div className="h-[calc(100%-64px)] overflow-auto p-2 bg-gray-100 dark:bg-[#252526] rounded-lg">
                    {result ? (
                        <div className="prose dark:prose-invert max-w-none text-black dark:text-white">
                            <ReactMarkdown>{result}</ReactMarkdown>
                        </div>
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400">
                            No output available. Please run an operation.
                        </p>
                    )}
                </div>
                
            </div>
        </>
    )
}

export default OutPutWindow;