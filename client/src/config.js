import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:
        "https://e-com-production-vmte.onrender.com",
});
