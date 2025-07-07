import { GoogleSignIn } from "../Axios/AuthReq";
import Button from "./Buttons";

function AuthButtonsSection(){

    const handelGoogleSingIn = async() => {
        await GoogleSignIn();
    }

    return(
        <>
            <div>
                <Button 
                    text="Login / Sign Up" 
                    onClick={() => {
                        handelGoogleSingIn();
                    }} 
                    type="loginFunction" 
                />
            </div>
        </>
    )
}

export default AuthButtonsSection;