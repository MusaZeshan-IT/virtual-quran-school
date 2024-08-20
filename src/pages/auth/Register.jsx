import React, { useState } from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('http://localhost:8000/api/accounts/register/', formData);
            console.log('User registered:', res.data);
        } catch (err) {
            console.error('Registration error:', err);
        }
    };

    return (
        <div className='my-24'>
            <div className='bg-[rgb(246,246,235)] px-8 py-10 w-[450px] mx-auto rounded-lg'>
                <h3 className='font-poppins font-semibold tracking-wide text-[22.5px] mb-7'>Create an Account</h3>
                <form onSubmit={onSubmit}>
                    <label className='font-poppins text-gray-600 ms-[1px]' htmlFor="username">User Name</label>
                    <input
                        id='username'
                        className='border mt-1 mb-3 font-poppins border-gray-300 rounded-md py-3 px-5 w-full'
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
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
                        onChange={onChange}
                        placeholder="Email"
                        required
                    />
                    <label className='font-poppins text-gray-600 ms-[1px]' htmlFor="password">Password</label>
                    <input
                        id='password'
                        className='border font-poppins mt-1 border-gray-300 rounded-md py-3 px-5 w-full'
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                        required
                    />
                    <button className='bg-[rgb(29,142,90)] rounded-md font-poppins text-white w-full py-3 mt-10' type="submit">Register</button>
                    <p className='font-poppins text-[16px] mt-5 text-center text-[rgb(99,97,97)] tracking-tight'>Already have an account?
                        <Link>
                            <span className='ms-2 text-[13.4px] relative bottom-[1px] font-semibold tracking-wider text-black'>Login Now</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
