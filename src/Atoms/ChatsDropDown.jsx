import { useState } from "react";
import Button from "./Buttons";
import ChatsEditing from "../Molecules/ChatsEditing";
import useChatsActions from "../Hooks/ChatsHook";

function ChatsDropDown({ setDropdownOpen }) {

    const [nameEditing, setNameEditing] = useState("");   

    const {deleteChatFunction} = useChatsActions();


    const handelDelete = () =>{
        const confirm = window.confirm("Are you sure you want to delete this chat?");
        if(!confirm) return;

        deleteChatFunction();
    }

    const handleOptionClick = (action) => {
        if (action === "rename") {
            setNameEditing("rename");
        }
        else{
            handelDelete();
        }
    };

    return (
        <>
            {!nameEditing && 
                <div className="w-40 text-sm text-black dark:text-white bg-white dark:bg-[#1e1e1e] rounded-lg shadow-lg ring-1 ring-black/10 dark:ring-white/10 p-1">
                
                    <Button 
                        text={"Rename"} 
                        onClick={() => handleOptionClick("rename")} 
                        type={"dropDown"} 
                    />
                    <Button 
                        text={"Delete Chat"} 
                        onClick={() => handleOptionClick("delete")} 
                        type={"dropDown_delete"} 
                    />
                
                </div>
            }

            {nameEditing == "rename" && 
                (
                    <ChatsEditing setDropdownOpen={setDropdownOpen}/>
                )
            }

        </>
    )
}

export default ChatsDropDown;
