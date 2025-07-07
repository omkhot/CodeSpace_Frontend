import axiosInstance from "./AxiosSetup";

export const getAllChatsOfUser = async(userId) =>{
    try {
        const res = await axiosInstance.get(`/chat/user/${userId}`);        
        console.log("Response from getAllChatsOfUser:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error in getAllChatsOfUser:", error);
        throw error;        
    }
}

export const getChatDetails = async(chatId) =>{
    try {
        const res = await axiosInstance.get(`/chat/${chatId}`);        
        console.log("Response from getChatDetails:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error in getChatDetails:", error);
        throw error;        
    }
}

export const renameChat = async(chatId, newTitle) =>{
    try {
        const res = await axiosInstance.put(`/chat/rename/${chatId}`, {newTitle});        
        console.log("Response from renameChat:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error in renameChat:", error);
        throw error;        
    }
}

export const deleteChat = async(chatId) =>{
    try {
        const res = await axiosInstance.delete(`/chat/${chatId}`);        
        console.log("Response from deleteChat:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error in deleteChat:", error);
        throw error;        
    }
}

export const deleteAllChats = async(userId) =>{
    try {
        const res = await axiosInstance.delete(`/chat/user/${userId}`);        
        console.log("Response from deleteAllChats:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error in deleteAllChats:", error);
        throw error;        
    }
}