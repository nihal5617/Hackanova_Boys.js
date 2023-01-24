import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).accessToken}`;
    }
    return req;
}, (error) => {
    return Promise.reject(error);
});

export const signup = (userInfo) => api.post(`/users/signup`, userInfo);
export const signin = (userInfo) => api.post(`/users/signin`, userInfo);

export const addPost = (postInfo, id) => api.post(`/posts/addPost/${id}`, postInfo);
export const getPosts = () => api.get(`/posts/`);
export const deletePost = (id) => api.delete(`/posts/${id}`);
export const addComment = (comment, id) => api.post(`/posts/comment/${id}`, comment);

export const updateCoins = (id) => api.post(`/users/updateToken/${id}`);