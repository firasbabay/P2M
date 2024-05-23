

import axios from "axios";
import store from "../path/to/your/redux/store"; // Replace with path to your Redux store setup

const axiosInstance = axios.create({
    baseURL: "http://localhost:8084/api/v1", // Base URL of your job service
    timeout: 10000, // Timeout in milliseconds
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
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

export const axiosInstanceJob = axiosInstance; // Export instance for job service

