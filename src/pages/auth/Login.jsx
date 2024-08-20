import React, { useState } from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('http://localhost:8000/api/accounts/login/', formData);
            console.log('User logged in:', res.data);
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
        } catch (err) {
            console.error('Login error:', err);
        }
    };

    return (
        <div className='my-24'>
            <div className='bg-[rgb(246,246,235)] px-10 py-12 w-[400px] mx-auto rounded-lg'>
                <h3 className='font-poppins font-semibold tracking-wide text-[22px] mb-7'>Hi, Welcome back!</h3>
                <form onSubmit={onSubmit}>
                    <input
                        className='border font-poppins border-gray-300 rounded-md py-3 px-5 w-full'
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        placeholder="Enter your username"
                        required
                    />
                    <input
                        className='border font-poppins mt-3 border-gray-300 rounded-md py-3 px-5 w-full'
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                        required
                    />
                    <p className='font-poppins mt-4 ms-1 text-[13.8px]'>Forgot your password?</p>
                    <button className='bg-[rgb(29,142,90)] rounded-md font-poppins text-white w-full py-3 mt-10' type="submit">Log In</button>
                    <p className='font-poppins text-[16px] mt-5 text-center text-[rgb(99,97,97)] tracking-tight'>Don't have an account?
                        <Link>
                            <span className='ms-2 text-[13.4px] relative bottom-[1px] font-semibold tracking-wider text-black'>Register Now</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
