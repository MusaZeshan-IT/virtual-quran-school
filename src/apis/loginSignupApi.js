import axios from 'axios';
import Cookies from 'js-cookie';

// Retrieve the CSRF token from cookies
const csrfToken = Cookies.get('csrftoken');

// Defining base URL
const baseURL = 'https://virtualquranschoolbackend.vercel.app/';

// Create an Axios instance with CSRF token included in headers
const loginSignupApi = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'X-CSRFToken': csrfToken,
        'Content-Type': 'application/json'
    }
});

export default loginSignupApi;
