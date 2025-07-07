import { useContext, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import LanguageModal from "../Atoms/LanguageModal";
import FontSettingsModal from "../Atoms/FontSettingsModal";
import EditorContext from "../Contexts/EditorContext";

function EditorSettings({onClose}) {

    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const [showFontSettingsModal, setShowFontSettingsModal] = useState(false);
    const {editorState} = useContext(EditorContext);    

    return(
        <>
            <div className="fixed inset-0 z-100 bg-black/40 flex flex-col items-center justify-center w-auto">

                <div className="w-2xl flex justify-between gap-2 bg-white dark:bg-[#3a3a3a] p-4 rounded-t-lg text-black dark:text-white">
                    <h1 className="text-lg font-bold">Editor Settings</h1>
                    <RxCrossCircled className="w-6 h-6 cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-200" onClick={onClose}/>
                </div>

                <div className="w-2xl flex flex-col gap-5 bg-white dark:bg-[#3a3a3a] p-4 rounded-b-lg text-black dark:text-white relative">
                    <ul className="space-y-2">
                        <li 
                            onClick={() => setShowFontSettingsModal(!showFontSettingsModal)}
                            className="p-4 font-bold text-black dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2c2c2c]"
                        >
                            Font <span className="text-gray-500 dark:text-gray-400 ml-10">{editorState.fontSize} {editorState.fontWeight} {editorState.fontFamily}</span>
                        </li>

                        {showFontSettingsModal && (
                            <div className="">
                                <FontSettingsModal />
                            </div>
                        )}
                        
                        <li 
                            onClick={() => setShowLanguageModal(!showLanguageModal)}
                            className="p-4 font-bold text-black dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2c2c2c]"
                        >
                            Language <span className="text-gray-500 dark:text-gray-400 ml-10">{editorState.language}</span>
                        </li>

                        {showLanguageModal && (
                            <div className="">
                                <LanguageModal />
                            </div>
                        )}
                    </ul>

                    

                    
                </div>

            </div>
        </>
    )
}

export default EditorSettings;