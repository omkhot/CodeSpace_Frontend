import Button from "../Atoms/Buttons";
import ThemeToggle from "../Atoms/ThemeToggleBtn";
import ModelDropDown from "./ModelDropDown";
import useAuthUserActions from "../Hooks/AuthUserActionsHook";
import { useContext, useRef, useState } from "react";
import ChatContext from "../Contexts/ChatContext";
import useCodeActions from "../Hooks/CodeActionsHook";
import ProfileBox from "./ProfileBox";
import useOutSideClick from "../Hooks/useOutsideClick";
import AuthButtonsSection from "../Atoms/AuthButtonsSection";
import ProfileButton from "../Atoms/ProfileButton";
import LogoHeader from "../Atoms/LogoHeader";
import UserContext from "../Contexts/UserContext";

function TopHeader({setIsSideBarOpen, isSideBarOpen}) {

    const {authUserState} = useContext(UserContext);

    const {setChatSelected} = useContext(ChatContext);
    const {setSelectedCode, setResult} = useCodeActions();

    // profile section
    const [profileShow, setProfileShow] = useState(false);
    const profileRef = useRef();
    useOutSideClick(profileRef, () => setProfileShow(false), profileShow);

   

    const handelNewChat = () => {
        setChatSelected(null);
        setResult("");
        setSelectedCode("");
        setIsSideBarOpen(false);
    }

    return(
        <>
            <div className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
                
                <LogoHeader setIsSideBarOpen={setIsSideBarOpen} isSideBarOpen={isSideBarOpen} />

                <div className="flex space-x-4 items-center">
                    
                    {authUserState.isAuthenticated && (
                        <>
                            <Button
                                text={"+ New Chat"}
                                onClick={() => {handelNewChat()}}
                                type="explainCode"
                            />
                        </>
                    )}

                    <ModelDropDown />
                    <ThemeToggle />

                    {authUserState.isAuthenticated ? 
                        (
                            <ProfileButton user={authUserState.user} profileShow={profileShow} setProfileShow={setProfileShow} />
                        ) : 
                            (
                                <AuthButtonsSection/>
                            )
                    }

                   

                    {profileShow && (
                        <div ref={profileRef}>
                            <ProfileBox onClose={() => setProfileShow(false)} />
                        </div>
                    )}
                    
                </div>
            </div>
        </>
    )
}

export default TopHeader;