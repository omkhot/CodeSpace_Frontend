import { RxDragHandleHorizontal } from "react-icons/rx";
import CodeEditor from "./CodeEditor";
import OutPutWindow from "./OutPutWindow";

function EditorResultScreen({leftWidth, handleMouseDown, containerRef}) {
    return(
        <>
            <div 
                ref={containerRef} 
                className="flex flex-grow overflow-hidden bg-[#f2f2f2] dark:bg-black px-2 py-1"
            >
                
                <div
                    className="p-2 border border-green-950 rounded-lg shadow-lg overflow-hidden"
                    style={{ width: `${leftWidth}%` }}
                >
                    <div className="w-full overflow-auto" >
                        <CodeEditor />
                    </div>
                </div>

                {/* Divider */}
                <div
                    onMouseDown={handleMouseDown}
                    className="cursor-col-resize w-1 bg-gray-400 dark:bg-gray-700 hover:bg-gray-600 transition-all"
                >
                    <RxDragHandleHorizontal className="w-8 h-6 border-2 rounded-full bg-white dark:bg-[#1e1e1e] text-black dark:text-white z-10 sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                
                <div className="flex-grow bg-white dark:bg-[#1e1e1e] overflow-auto p-2 rounded-lg ml-1">
                    <div className="w-full overflow-auto" >
                        <OutPutWindow />
                    </div>
                </div>
                
            </div>
        </>
    )
}


export default EditorResultScreen;