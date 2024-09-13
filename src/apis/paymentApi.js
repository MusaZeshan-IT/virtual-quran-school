import axios from 'axios';
import Cookies from 'js-cookie';

// Initialize axios instance with base URL and headers
const paymentApi = axios.create({
    baseURL: 'https://web-production-61cc.up.railway.app/',
    timeout: 5000,
    headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add access token if available
paymentApi.interceptors.request.use(config => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
}, error => Promise.reject(error));

paymentApi.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const { data } = await axios.post('https://web-production-61cc.up.railway.app/api/token/refresh/', {
                    refresh: localStorage.getItem('refresh_token')
                });
                localStorage.setItem('access_token', data.access);
                paymentApi.defaults.headers['Authorization'] = `Bearer ${data.access}`;
                return paymentApi(originalRequest);
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



export default paymentApi;
