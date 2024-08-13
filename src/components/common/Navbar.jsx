import React from 'react';
import { Link } from 'react-router-dom';
import IslamicBg from '../../assets/islamic-bg.jpg';

const Navbar = () => {
    return (
        <div className='bg-emerald-800 py-4 px-28 flex items-center justify-between'>
            <ul className='flex gap-x-9 text-lg text-white font-semibold'>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link>
                    <li className='hover:cursor-not-allowed'>Courses</li>
                </Link>
                <Link>
                    <li className='hover:cursor-not-allowed'>Blog</li>
                </Link>
                <Link>
                    <li className='hover:cursor-not-allowed'>About Us</li>
                </Link>
                <Link>
                    <li className='hover:cursor-not-allowed'>Contact</li>
                </Link>
            </ul>
            <div className='flex gap-x-8 items-center'>
                <i className='fa-solid cursor-not-allowed fa-bars-staggered text-2xl text-white'></i>
                <button className='cursor-not-allowed bg-[rgb(219,158,48)] text-white text-[17px] font-semibold px-5 py-3 rounded-[28px]'>
                    <i class="fa-regular fa-clock me-2"></i>
                    Namaz Timings
                    <i class="fa-solid fa-caret-down ms-3"></i>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
