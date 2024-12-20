import axios from "axios";

const instance = axios.create({
    baseURL: 'https://be-6414.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return error.response;
});

export default instance;