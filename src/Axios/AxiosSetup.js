import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_Backend_URL || "http://localhost:5000",
    headers: {
        "Content-Type": "application/json",        
    },
    "withCredentials": true,
});

export default axiosInstance;