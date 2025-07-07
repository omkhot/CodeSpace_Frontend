import axiosInstance from "./AxiosSetup";

export const GoogleSignIn = async() => {
    // Redirect the browser to start the OAuth flow
    window.location.href = 'http://localhost:5300/auth/google';      
}

export const ValidateUser = async() =>{
    try {
        const res = await axiosInstance.get('/auth/validate',{
            withCredentials: true
        });
        console.log("Response from ValidateUser:", res.data);
        return res.data;
    } catch (error) {
        console.log("Error in ValidateUser:", error);
        throw error;
    }
}

export const LogoutUser = async() =>{
    try {
        const res = await axiosInstance.post('/auth/logout',{
            withCredentials: true
        });        
        console.log("Response from LogoutUser:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error in LogoutUser:", error);
        throw error;        
    }
}

export const DeleteAccount = async(userId) =>{
    try {
        const res = await axiosInstance.delete(`/auth/${userId}`,{
            withCredentials: true
        });        
        console.log("Response from DeleteAccount:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error in DeleteAccount:", error);
        throw error;        
    }
}