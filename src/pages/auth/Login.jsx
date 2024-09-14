import React, { useState } from 'react';
import loginSignupApi from '../../apis/loginSignupApi';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const apiUrl = '/accounts/login/';
            const response = await loginSignupApi.post(apiUrl, {
                username: usernameOrEmail,
                password,
            });

            if (response.status === 200) {
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                localStorage.setItem('username', response.data.username);
                alert('Login successful');
                setUsernameOrEmail('');
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

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
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
                    )}
                    <input
                        className='border font-poppins border-gray-300 rounded-md py-3 px-5 w-full'
                        type="text"
                        name="username"
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                        placeholder="Enter username or email"
                        required
                    />

                    <div className='relative mt-3'>
                        <input
                            className='border font-poppins border-gray-300 rounded-md py-3 px-5 w-full pr-10'
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                        <button
                            type="button"
                            className='absolute right-3 top-3 text-gray-500 focus:outline-none'
                            onClick={togglePasswordVisibility}
                        >
                            <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                        </button>
                    </div>

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
