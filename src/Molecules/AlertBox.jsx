import { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import CodeContext from "../Contexts/CodeContext";

function AlertBox({message, type}) {

    const {state, dispatch} = useContext(CodeContext);

    return (
        <>
            <div>
                <div className={`w-auto  h-auto flex gap-5 justify-between p-4 rounded-lg shadow-lg fixed bottom-4 right-4 z-50 ${type === "error" ? "bg-red-100 border border-red-500 text-red-700" : "bg-green-100 border border-green-500 text-green-700"}`}>
                    <div>
                        <span>{message}</span>
                    </div>

                    <div>
                        <RxCrossCircled 
                            onClick={() => {
                                dispatch({ type: "SET_ERROR", payload: null });
                                dispatch({type: "SET_LOADING", payload: false});
                            }}
                            className="w-6 h-6 cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-200"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlertBox;