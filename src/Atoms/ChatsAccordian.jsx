import { useContext } from "react";
import useCodeActions from "../Hooks/CodeActionsHook";
import ChatContext from "../Contexts/ChatContext";

function ChatsAccordian({chat}){

    const { setSelectedCode, setResult } = useCodeActions();
    const { setChatSelected } = useContext(ChatContext);

    const handleShowClicked = (data) => {
        setChatSelected(chat._id);
        setSelectedCode(data.inputCode);
        setResult(data.aiResponse);
    };

    return(
        <>
            <div className="bg-gray-50 dark:bg-[#2e2e2e] p-2 dark:text-white cursor-pointer">
                {chat.interactions && chat.interactions.length > 0 ? (
                    <ul className="space-y-2">
                        {chat.interactions.map((task, index) => (
                            <li
                                key={index}
                                className="bg-white dark:bg-[#454545] rounded-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                                onClick={() => handleShowClicked(task)}
                            >
                                {task.actionType}
                            </li>
                        ))}
                    </ul>
                    ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">No tasks available.</p>
                    )}
            </div>
        </>
    )
}

export default ChatsAccordian;