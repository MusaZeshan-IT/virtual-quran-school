import axios from 'axios';
import Cookies from 'js-cookie';

// Retrieve the CSRF token from cookies
const csrfToken = Cookies.get('csrftoken');

// Create an Axios instance with CSRF token included in headers
const api = axios.create({
    headers: {
        'X-CSRFToken': csrfToken,
    }
});

export default api;
