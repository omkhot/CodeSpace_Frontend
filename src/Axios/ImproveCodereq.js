import axiosInstance from "./AxiosSetup";

export const ImproveCodeReq = async (code, model, user, chat) => {

    console.log("Sending chatId is:", chat);

    const details = {
        code : code,
        chatId : chat,
        userId : user?._id || null
    }

    try {
        const res = await axiosInstance.post('/improve', {
            code: code,
            model: model,
            details
        });
        const data = res.data;
        console.log("ImproveCodeReq response:", data);
        return data;
    } catch (error) {
        console.error("Error in ImproveCodeReq:", error);
        throw error;
    }
}