import { ChevronDown, ChevronUp } from "lucide-react";
import { BsThreeDots } from "react-icons/bs";
import ChatsDropDown from "./ChatsDropDown";

function ChatListItem({chat, toggleAccordion, openChatId, setChatSelected, dropdownChatId, setDropdownChatId}){
    return(
        <>
            <div className="relative">
                <div
                    className="flex items-center justify-between bg-white dark:bg-[#3a3a3a] text-black dark:text-white px-4 py-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                    onClick={() => toggleAccordion(chat._id)}
                >

                    <h3 className="font-semibold text-md">{chat.title}</h3>

                    <div className="flex items-center gap-3">
                        {openChatId === chat._id ? (
                            <ChevronUp className="w-4 h-4" />
                        ) : (
                            <ChevronDown className="w-4 h-4" />
                        )}

                        
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <BsThreeDots
                                className="w-5 h-5 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-1"
                                    onClick={() =>{
                                        setChatSelected(chat._id)
                                        setDropdownChatId(dropdownChatId === chat._id ? null : chat._id)
                                    }}
                            />
                            {dropdownChatId === chat._id && (
                                <div className="absolute top-full right-0 mt-2 z-50 bg-white dark:bg-[#3a3a3a] shadow-lg border dark:border-gray-700 rounded-lg w-40">
                                    <ChatsDropDown
                                        setDropdownOpen={() => setDropdownChatId(null)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatListItem;