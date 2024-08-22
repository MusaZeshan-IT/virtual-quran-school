import axios from 'axios';
import Cookies from 'js-cookie';

// Retrieve the CSRF token from cookies
const csrfToken = Cookies.get('csrftoken');

// Defining base URL
const baseURL = 'http://127.0.0.1:8000/api/';

// Create an Axios instance without setting the Authorization header
const logoutApi = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'X-CSRFToken': csrfToken,
        'Content-Type': 'application/json'
    }
});

export default logoutApi;
