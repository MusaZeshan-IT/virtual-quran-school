import React, { useState } from 'react';
import loginSignupApi from '../../apis/loginSignupApi';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const apiUrl = '/accounts/register/';
            const response = await loginSignupApi.post(apiUrl, {
                username,
                email,
                password,
                password2
            });

            if (response.status === 200 || response.status === 201) {
                alert('User registered successfully');
                setUsername('');
                setEmail('');
                setPassword('');
                setPassword2('');
                setError('');
                navigate('/login');
            }
        } catch (err) {
            console.error('Error registering user:', err);
            setError('Something went wrong. Failed to register user. Please check your input and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className='my-24'>
            <div className='bg-[rgb(246,246,235)] px-8 py-10 xs:w-[450px] w-full mx-auto rounded-lg'>
                <h3 className='font-poppins font-semibold tracking-wide text-[22.5px] mb-7'>Create an Account</h3>
                <form onSubmit={handleSubmit}>
                    {error && (
                        <div className='bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded flex gap-x-[6px]'>
                            <i className='fa-solid fa-circle-exclamation mt-[3px]'></i>
                            <p className="text-red-500 font-poppins text-sm">{error}</p>
                        </div>
                    )}
                    <label className='font-poppins text-gray-600 ms-[1px]' htmlFor="username">User Name</label>
                    <input
                        id='username'
                        className='border mt-1 mb-3 font-poppins border-gray-300 rounded-md py-3 px-5 w-full'
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                    <label className='font-poppins text-gray-600 ms-[1px]' htmlFor="email">Email</label>
                    <input
                        id='email'
                        className='border font-poppins mt-1 mb-3 border-gray-300 rounded-md py-3 px-5 w-full'
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <label className='font-poppins text-gray-600 ms-[1px]' htmlFor="password">Password</label>
                    <div className='relative mt-1 mb-3'>
                        <input
                            id='password'
                            className='border font-poppins border-gray-300 rounded-md py-3 px-5 w-full pr-10'
                            type={showPassword ? "text" : "password"} // Toggle password visibility
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
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
                    <label className='font-poppins text-gray-600 ms-[1px]' htmlFor="confirmPassword">Confirm Password</label>
                    <div className='relative mt-1'>
                        <input
                            id='confirmPassword'
                            className='border font-poppins border-gray-300 rounded-md py-3 px-5 w-full pr-10'
                            type={showPassword ? "text" : "password"} // Toggle confirm password visibility
                            name="confirmPassword"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            placeholder="Confirm Password"
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
                    <button disabled={isSubmitting} className={`bg-[rgb(29,142,90)] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} rounded-md font-poppins text-white w-full py-3 mt-10`} type="submit">
                        {isSubmitting ? 'Registering...' : 'Register'}
                    </button>
                    <p className='font-poppins text-[16px] mt-5 text-center text-[rgb(99,97,97)] tracking-tight'>Already have an account?
                        <Link to="/login">
                            <span className='ms-2 text-[13.4px] relative bottom-[1px] font-semibold tracking-wider text-black'>Login Now</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
