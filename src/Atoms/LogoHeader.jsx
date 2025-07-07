import { FaBars } from "react-icons/fa";
import Logo2 from "../assets/AppLogo2.png";
import { useContext } from "react";
import UserContext from "../Contexts/UserContext";

function LogoHeader({setIsSideBarOpen, isSideBarOpen}) {

    const {authUserState: {isAuthenticated}} = useContext(UserContext);

    return(
        <>
            <div className="flex items-center space-x-2">
                {isAuthenticated && (
                    <FaBars className="text-xl mr-5 cursor-pointer" onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
                )}
                <img 
                    src = {Logo2}
                    alt="Logo"
                    className="h-10 w-10 bg-white rounded-full p-1 shadow-md"
                />
                <h1 className="text-2xl font-bold">CodeSpace</h1>
            </div>
        </>
    )
}

export default LogoHeader;