import axios from 'axios';
import Cookies from 'js-cookie';

// Initialize axios instance with base URL and headers
const api = axios.create({
    baseURL: 'https://virtualquranschoolbackend.vercel.app/',
    timeout: 5000,
    headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add access token if available
api.interceptors.request.use(config => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
}, error => Promise.reject(error));

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const { data } = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
                    refresh: localStorage.getItem('refresh_token')
                });
                localStorage.setItem('access_token', data.access);
                api.defaults.headers['Authorization'] = `Bearer ${data.access}`;
                return api(originalRequest);
            } catch (err) {
                console.error('Token refresh failed:', err);
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/login'; // Redirect to login
            }
        }
        return Promise.reject(error);
    }
);



export default api;
