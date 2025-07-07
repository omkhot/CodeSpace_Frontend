import { useContext, useState } from "react";
import Button from "../Atoms/Buttons";
import ConfirmationBox from "./ConfirmationBox";
import useChatsActions from "../Hooks/ChatsHook";
import useCodeActions from "../Hooks/CodeActionsHook";
import { LogoutUser } from "../Axios/AuthReq";
import EditorSettings from "../Organs/EditorSettings";
import UserContext from "../Contexts/UserContext";

function ProfileBox({onClose}){

    const {authUserState : {user}, validateUser, deleteAccount} = useContext(UserContext);
    const {deleteAllChatsFunction} = useChatsActions();
    const {setSelectedCode, setResult} = useCodeActions();

    const [openConfimationBox, setOpenConfirmationBox] = useState(false);

    const [msg, setMsg] = useState("");

    const [openEditorsettings, setOpenEditorSettings] = useState(false);

    const onSubmit = async () =>{

        if(msg === "Are you sure you want to delete all chats?"){
            try {
                await deleteAllChatsFunction(user._id);
                setOpenConfirmationBox(false);
                setSelectedCode(null);
                setResult(null);
            } catch (error) {
                console.error("Error in onSubmit:", error);
            }            
        }
        else if(msg === "Are you sure you want to log out?"){
            try {
                await LogoutUser();
                setOpenConfirmationBox(false);
                onClose();
                alert("Logged out successfully");
                validateUser();
            } catch (error) {
                console.error("Error in onSubmit:", error);
            }            
        }   
        else {
            try {
                await deleteAccount(user._id);
                setOpenConfirmationBox(false);
                onClose();
                alert("Account deleted successfully");
                validateUser();
            } catch (error) {
                console.error("Error in onSubmit:", error);
            }
            
        }     

    }   

    const onClickHandler = () => {
        setOpenConfirmationBox(!openConfimationBox);        
    }

    if(openEditorsettings){
        return(
            <>
                <EditorSettings onClose={() => setOpenEditorSettings(false)} />
            </>
        )
    }

    return(
        <>
            <div className="absolute top-12 right-15 w-sm p-4 bg-white dark:bg-[#3a3a3a] rounded-lg shadow-lg">
                
                <div className="flex flex-col items-center space-y-2 mb-2">
                    <div>
                        <img 
                            src={user?.profileImage}
                            className="w-12 h-12 rounded-full"
                        />
                    </div>
                    <div className="font-semibold text-black dark:text-white">
                        {user?.email}
                    </div>
                    
                </div>

                <hr></hr>

                <div className="mt-2">

                    <Button
                        text="Editor Settings"
                        onClick={() => {
                            setOpenEditorSettings(true);
                        }}
                        type={"dropDown"}
                    />

                    <Button
                        text="Delete All Chats"
                        onClick={() => {
                            setMsg("Are you sure you want to delete all chats?");
                            onClickHandler();
                        }}
                        type={"dropDown"}
                    />

                    <Button
                        text="Log Out"
                        onClick={() => {
                            setMsg("Are you sure you want to log out?");
                            onClickHandler();
                        }}
                        type={"dropDown_delete"}
                    />

                    <Button
                        text="Delete Account"
                        onClick={() => {
                            setMsg("Are you sure you want to delete your account?");
                            onClickHandler();
                        }}
                        type={"dropDown_delete"}
                    />
                    
                </div>

                
            </div>

            {openConfimationBox && <ConfirmationBox msg={msg} onSubmit={onSubmit} onCancel={() => {setOpenConfirmationBox(false)}} />}
        </>
    )
}

export default ProfileBox;