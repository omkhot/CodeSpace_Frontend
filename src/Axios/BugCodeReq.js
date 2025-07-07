import axiosInstance from "./AxiosSetup";

export const BugCodeReq = async (code, referenceText, model, user, chat) => {

    const details = {
        code : code,
        chatId : chat,
        userId : user?._id || null
    }

    try {
        const res = await axiosInstance.post('/findbug', {code, referenceText, model, details});        
        console.log("Response from BugCodeReq:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error in BugCodeReq:", error);
        throw error;        
    }
}