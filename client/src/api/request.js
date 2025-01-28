import axios from "axios";

const sendRequest = () => {
    const request = axios.create({
        baseURL: process.env.HOST || 'http://localhost:8080/api',
        timeout: 60000
    });

    request.interceptors.response.use(
        response => response,
        error => {
            console.error("API request error:", error);
            return Promise.reject(error);
        }
    );

    return request;
};

export { sendRequest };