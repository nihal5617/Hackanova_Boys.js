import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:5000/api/furnishi'
    // baseURL: 'https://furnishi-zh4d.onrender.com/api/furnishi'1
});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer $(JSON.parse(localStorage.getItem('profile')).token)`;
    }
    return req;
} , (error) => {
    return Promise.reject(error);
} );