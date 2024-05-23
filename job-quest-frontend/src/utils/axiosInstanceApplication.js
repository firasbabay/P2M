import axios from "axios";
import store from "../path/to/your/redux/store";

const axiosInstanceApplication = axios.create({
    baseURL: "http://localhost:8083/api/v1", // Base URL of your job application service
    timeout: 10000, // Timeout in milliseconds
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstanceApplication.interceptors.request.use(
    (config) => {
        const authToken = store.getState().auth.token; // Replace with your actual function to get the token
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstanceApplication;
