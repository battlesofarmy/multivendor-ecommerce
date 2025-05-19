import axios from 'axios';

const api = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://multivendor-backend-henna.vercel.app",
    timeout: 10000,
    headers: {"Content-Type": "application/json"}
});   

export default api;