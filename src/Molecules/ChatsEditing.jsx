import { useContext, useState } from "react";
import useChatsActions from "../Hooks/ChatsHook";
import ChatContext from "../Contexts/ChatContext";

function ChatsEditing({setDropdownOpen}){

    const {renameChatFunction} = useChatsActions();
    const {setChatsEditing} = useContext(ChatContext);

    const [newTitle, setNewTitle] = useState("");

    return(
        <>
            <div className="flex gap-2">
                <input 
                    className="w-40 text-sm text-black dark:text-white bg-white dark:bg-[#1e1e1e] rounded-lg shadow-lg ring-1 ring-black/10 dark:ring-white/10 p-1" 
                    type="text"        
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}           
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            renameChatFunction(newTitle);
                            setChatsEditing(prev => prev + 1);
                            setDropdownOpen(false);
                        }}
                    }      
                />
            </div>
        </>
    )
}

export default ChatsEditing;