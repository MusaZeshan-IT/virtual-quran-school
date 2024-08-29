import React, { useState } from 'react';
import loginSignupApi from '../../apis/loginSignupApi';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error messages
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loading

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const apiUrl = '/accounts/login/'; // Adjust the URL as needed
            const response = await loginSignupApi.post(apiUrl, {
                username: usernameOrEmail, // Assuming the user is entering either a username or email
                password,
            });

            if (response.status === 200) { // Check for successful response
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                localStorage.setItem('username', response.data.username);
                alert('Login successful');
                setUsernameOrEmail(''); // Clear input fields
                setPassword('');
                setError('');
                setIsAuthenticated(true);
                navigate('/');
            }
        } catch (err) {
            console.error('Error logging in:', err);
            setError('Failed to log in. Please check your credentials and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='my-24'>
            <div className='bg-[rgb(246,246,235)] px-10 py-12 2xs-custom:w-[400px] w-full mx-auto rounded-lg'>
                <form onSubmit={handleSubmit}>
                    <h3 className='font-poppins font-semibold tracking-wide text-[22px] mb-7'>Hi, Welcome back!</h3>
                    {error && (
                        <div className='bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded flex gap-x-[6px]'>
                            <i className='fa-solid fa-circle-exclamation mt-[3px]'></i>
                            <p className="text-red-500 font-poppins text-sm">{error}</p>
                        </div>
                    )} {/* Display error message */}
                    <input
                        className='border font-poppins border-gray-300 rounded-md py-3 px-5 w-full'
                        type="text"
                        name="username"
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                        placeholder="Enter username or email"
                        required
                    />
                    <input
                        className='border font-poppins mt-3 border-gray-300 rounded-md py-3 px-5 w-full'
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                    <p className='font-poppins mt-4 ms-1 text-[13.8px]'>Forgot your password?</p>
                    <button disabled={isSubmitting} className={`bg-[rgb(29,142,90)] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} rounded-md font-poppins text-white w-full py-3 mt-10`} type="submit">
                        {isSubmitting ? 'Logging in...' : 'Log In'}
                    </button>
                    <p className='font-poppins text-[16px] mt-5 text-center text-[rgb(99,97,97)] tracking-tight'>Don't have an account?
                        <Link to="/register">
                            <span className='ms-2 text-[13.4px] relative bottom-[1px] font-semibold tracking-wider text-black'>Register Now</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
