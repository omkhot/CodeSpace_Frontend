import axiosInstance from "./AxiosSetup";

export const ExplainCodeReq = async (code, model, user, chat) => {

    const details = {
        code : code,
        chatId : chat,
        userId : user?._id || null
    }

    try {
        const res = await axiosInstance.post('/explain', {code, model, details});
        console.log("Response from ExplainCodeReq:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error in ExplainCodeReq:", error);
        throw error;        
    }
}