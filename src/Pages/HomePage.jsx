import { useContext, useRef, useState } from "react";
import TopHeader from "../Molecules/TopHeader";
import useCodeActions from "../Hooks/CodeActionsHook";
import AlertBox from "../Molecules/AlertBox";
import ChatsSideBar from "../Organs/ChatsSideBar";
import LoginPromptBox from "../Atoms/LoginPromptBox";
import useOutSideClick from "../Hooks/useOutsideClick";
import useScreenAdujuster from "../Hooks/useSreenAdujuster";
import EditorResultScreen from "../Organs/EditorResultScreen";
import UserContext from "../Contexts/UserContext";

function HomePage() {

    // Screen Adujuster
    const containerRef = useRef(null);
    const {leftWidth, handleMouseDown} = useScreenAdujuster(containerRef);    
    
    // side bar logic
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const siderBarRef = useRef();
    useOutSideClick(siderBarRef, () => setIsSideBarOpen(false), isSideBarOpen);

    const {authUserState: {user}} = useContext(UserContext);
    const {error} = useCodeActions();

    return (
        <div className="w-full h-screen flex flex-col">
            <TopHeader isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>

            <EditorResultScreen leftWidth={leftWidth} handleMouseDown={handleMouseDown} containerRef={containerRef} />     

            {isSideBarOpen && (
                <div ref={siderBarRef} className="absolute top-20 left-2 z-500 w-sm">
                    <ChatsSideBar />
                </div>
            )}      

            {error && <AlertBox message={error} type="error" />}

            {!user && <LoginPromptBox />}

        </div>
    );
}

export default HomePage;
