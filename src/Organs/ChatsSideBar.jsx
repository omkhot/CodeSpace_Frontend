import { useContext, useEffect, useState } from "react";
import { getAllChatsOfUser } from "../Axios/ChatReq";
import ChatContext from "../Contexts/ChatContext";
import ChatsAccordian from "../Atoms/ChatsAccordian";
import ChatListItem from "../Atoms/ChatsMainList";
import UserContext from "../Contexts/UserContext";

function ChatsSideBar() {
    const [chats, setChats] = useState([]);
    const [openChatId, setOpenChatId] = useState(null);
    const [dropdownChatId, setDropdownChatId] = useState(null);

    const { authUserState: {user} } = useContext(UserContext);
   
    const { setChatSelected, ChatsEditing } = useContext(ChatContext);

    const toggleAccordion = (chatId) => {
        setOpenChatId((prevId) => (prevId === chatId ? null : chatId));
    };

    const fetchAllChats = async () => {
        try {
            const res = await getAllChatsOfUser(user._id);
            const chatData = res.data;
            setChats(chatData);
        } catch (error) {
            console.error("Error in fetchAllChats:", error);
        }
    };

    useEffect(() => {
        fetchAllChats();
    }, [ChatsEditing]);

    return (
        <div className="h-[89vh] overflow-y-scroll bg-gray-100 dark:bg-[#252526] p-4 custom-scrollbar">
            {chats?.map((chat) => (
                <div key={chat._id} className="mb-3 rounded-xl shadow-sm overflow-visible">
                
                    {/* Chat Header */}
                    <ChatListItem 
                        chat={chat} 
                        toggleAccordion={toggleAccordion} 
                        openChatId={openChatId} 
                        setChatSelected={setChatSelected} 
                        dropdownChatId={dropdownChatId} 
                        setDropdownChatId={setDropdownChatId} 
                    />

                    {/* Chat Interactions */}
                    {openChatId === chat._id && (
                        <ChatsAccordian chat={chat} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default ChatsSideBar;
