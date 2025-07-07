import axiosInstance from "./AxiosSetup";

export const AutoCodeReq = async (code, context, model, user, chat) => {

    const details = {
        code : code,
        chatId : chat,
        userId : user?._id || null
    }

    try {
        const res = await axiosInstance.post('/autocomplete', {
            partialCode: code,
            context: context,
            model: model,
            details
        });
        const data = res.data;
        console.log("AutoCodeReq response:", data);
        return data;
    } catch (error) {
        console.error("Error in AutoCodeReq:", error);
        throw error;
    }
}