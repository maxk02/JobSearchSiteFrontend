import axios from "axios";


const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
});

// axiosClient.interceptors.request.use((config) => {
//     const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });

export default axiosClient;
