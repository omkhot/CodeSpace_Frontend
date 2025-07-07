import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx"

function LoginPromptBox(){

    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false); // Hide after 5 seconds
        }, 5000);

        return () => clearTimeout(timer); // Cleanup in case component unmounts early
    }, []);

    if (!show) return null;

    return(
        <>
            <div>
                <div className="w-auto  h-auto flex gap-5 justify-between p-4 rounded-lg shadow-lg fixed bottom-4 right-4 z-50 bg-red-100 border border-red-500 text-red-700" >
                    <div>
                        <span>You are using CodeSpace as a guest. Login to save your chats and track your coding history.</span>
                    </div>

                    <div>
                        <RxCrossCircled 
                            onClick={() => setShow(false)} // Hide the box manually
                            className="w-6 h-6 cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-200"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPromptBox;