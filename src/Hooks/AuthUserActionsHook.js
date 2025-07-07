import { useEffect, useReducer } from "react";
import { DeleteAccount, ValidateUser } from "../Axios/AuthReq";
import AuthUserReducer from "../Reducers/AuthUserReducer";

const initialAuthUserState = {
    user: null,
    authLoading: true,
    error: null,
    isAuthenticated: false,
};

function useAuthUserActions(){
    const [authUserState, dispatchAuthUser] = useReducer(AuthUserReducer, initialAuthUserState);

        
    const validateUser = async() =>{

        dispatchAuthUser({ type: "SET_AUTH_LOADING", payload: true });

        try {
            const res = await ValidateUser();
            dispatchAuthUser({ type: "SET_USER", payload: res.user });
            dispatchAuthUser({ type: "SET_AUTH_LOADING", payload: false });
            dispatchAuthUser({ type: "SET_IS_AUTHENTICATED", payload: true });
        } catch (error) {
            console.log("Error in validationUser:", error);
            dispatchAuthUser({ type: "SET_AUTH_LOADING", payload: false });
            dispatchAuthUser({ type: "SET_ERROR", payload: error.response?.data?.error || "An error occurred while validating the user." });
            dispatchAuthUser({ type: "SET_IS_AUTHENTICATED", payload: false });
        }
    }

    const deleteAccount = async(userId) =>{

        dispatchAuthUser({ type: "SET_AUTH_LOADING", payload: true });

        try {
            const res = await DeleteAccount(userId);
            dispatchAuthUser({ type: "SET_USER", payload: null });
            dispatchAuthUser({ type: "SET_AUTH_LOADING", payload: false });
            dispatchAuthUser({ type: "SET_IS_AUTHENTICATED", payload: false });
        } catch (error) {
            console.log("Error in deletingUser:", error);
            dispatchAuthUser({ type: "SET_AUTH_LOADING", payload: false });
            dispatchAuthUser({ type: "SET_ERROR", payload: error.response?.data?.error || "An error occurred while validating the user." });
            dispatchAuthUser({ type: "SET_IS_AUTHENTICATED", payload: true });
        }
    }

    useEffect(() => {
        validateUser();
        console.log("User Logged In:", authUserState.user);
    }, []);

    return {
        authUserState,
        dispatchAuthUser,
        deleteAccount,
        validateUser
    }
}

export default useAuthUserActions;