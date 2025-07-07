import { useContext } from "react";
import ChatContext from "../Contexts/ChatContext";
import { deleteAllChats, deleteChat, renameChat } from "../Axios/ChatReq";

function useChatsActions(){

    const {chatSelected, setChatsEditing} = useContext(ChatContext);

    const renameChatFunction = async(newTitle) => {
        try {
            const res = await renameChat(chatSelected, newTitle);
            setChatsEditing(newTitle);
        } catch (error) {
            console.error("Error in handelRename:", error);
        }
    }

    const deleteChatFunction = async() => {
        try {
            const res = await deleteChat(chatSelected);
            setChatsEditing(prev=>prev+1);
        } catch (error) {
            console.error("Error in handelRename:", error);
        }
    }
    
    const deleteAllChatsFunction = async(userId) => {
        try {
            const res = await deleteAllChats(userId);
            setChatsEditing(prev=>prev+1);
        } catch (error) {
            console.error("Error in handelRename:", error);
        }
    }

    return{
        renameChatFunction,
        deleteChatFunction,
        deleteAllChatsFunction
    }

}

export default useChatsActions;