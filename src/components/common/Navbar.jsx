import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBanner from '../../assets/top-banner.png';
import AllahName from '../../assets/allah-name.png';
import logoutApi from '../../apis/logoutApi';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility


    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = async () => {
        const refresh_token = localStorage.getItem('refresh_token');
        try {
            const apiUrl = '/accounts/logout/';
            const response = await logoutApi.post(apiUrl, {
                refresh_token: refresh_token
            });

            if (response.status === 204 || response.status === 205) {
                // Logout success
                setIsAuthenticated(false);
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                alert('Logged out successfully');
                navigate('/');
            }
        } catch (err) {
            console.error('Error logging out:', err.response?.data || err.message);
        }
    };

    const username = localStorage.getItem('username');

    return (
        <div className='bg-[rgb(8,81,63)] h-[90px] xs:px-10 2xs-custom:px-8 px-6 flex justify-between items-center'>
            <div className='flex items-center'>
                <div className='relative sm:right-0 xs-custom:right-2 xs:right-3 2xs-custom:right-4 2xs:right-5'>
                    <img className='h-28 mb-4' src={TopBanner} alt="Top Banner" />
                    <img className='h-[72px] w-[72px] absolute top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={AllahName} alt="Allah Name" />
                </div>
                <ul className='hidden lg:flex xl:ms-16 lg-custom:ms-14 ms-12 xl:gap-x-9 lg-custom:gap-x-8 lg:gap-x-7 gap-x-5 text-lg text-white font-poppins'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/courses">
                        <li>Courses</li>
                    </Link>
                    <Link><li className='hover:cursor-not-allowed'>Blog</li></Link>
                    <Link><li className='hover:cursor-not-allowed'>About</li></Link>
                    <Link><li className='hover:cursor-not-allowed'>Contact</li></Link>
                </ul>
            </div>
            <div className='items-center flex'>
                <div className='lg:flex hidden'>
                    <Link to="/register">
                        <button className='lg:me-4 me-3 shadow-[5.5px_5.5px_1px_0_rgba(40,40,40,0.5)] text-lg font-poppins hover:shadow-none lg-custom:hover:px-8 hover:px-7 transition-all duration-500 ease-linear bg-[rgb(231,231,230)] text-black text-[17px] tracking-wide lg-custom:px-7 px-6 py-[10px] rounded-[34px]'>
                            Signup
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className='shadow-[5px_5px_1px_0_rgba(219,158,48,0.4)] text-lg font-poppins hover:shadow-none lg-custom:hover:px-8 hover:px-7 transition-all duration-500 ease-linear bg-[rgb(219,158,48)] text-white text-[17px] tracking-wide lg-custom:px-7 px-6 py-[10px] rounded-[32px]'>
                            Login
                        </button>
                    </Link>
                </div>
                {/* Menu Icon for Small Screens */}
                <button onClick={toggleSidebar} className='lg:hidden grid place-items-center border-2 border-[rgb(219,158,49)] w-10 h-10 rounded-md text-white text-lg ms-9'>
                    <i className='fa-solid fa-bars text-[18px]'></i>
                </button>
                {isAuthenticated && (
                    <div className='relative'>
                        <button onClick={toggleDropdown} className='rounded-full flex shadow-[0_0_4px_2px_rgba(40,40,40,0.5)] transition-all duration-500 ease-in-out hover:bg-[rgb(199,202,201)] justify-center ms-5 items-center h-12 w-14 bg-[rgb(229,235,233)]'>
                            <i className='fa-solid text-black me-1 fa-user'></i>
                            <i className='fa-solid text-black fa-caret-down'></i>
                        </button>
                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className='absolute z-50 right-0 mt-4 py-2 w-48 bg-white rounded-lg shadow-lg'>
                                <p className='px-4 py-1 text-[17px] border-b text-gray-500 font-poppins'>{username}</p>
                                <button onClick={() => handleLogout()} className='block font-poppins w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Sidebar */}
            <div className={`lg:hidden block fixed top-0 right-0 px-10 py-5 w-96 h-full bg-[rgb(228,229,240)] opacity-[0.97] z-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <i className='fa-solid fa-xmark flex justify-end text-2xl text-[rgb(25,25,25)]' onClick={toggleSidebar}></i>
                <ul className='flex flex-col font-poppins mt-6 gap-y-6 text-black text-lg'>
                    <div className='border-b-2 pb-2 border-[rgb(209,205,205)]'>
                        <Link to="/" onClick={toggleSidebar}><li className=''>Home</li></Link>
                    </div>
                    <div className='border-b-2 pb-2 border-[rgb(209,205,205)]'>
                        <Link to="/courses" onClick={toggleSidebar}><li className='hover:cursor-not-allowed'>Courses</li></Link>
                    </div>
                    <div className='border-b-2 pb-2 border-[rgb(209,205,205)]'>
                        <Link onClick={(e) => e.preventDefault()}><li className='hover:cursor-not-allowed'>Blog</li></Link>
                    </div>
                    <div className='border-b-2 pb-2 border-[rgb(209,205,205)]'>
                        <Link onClick={(e) => e.preventDefault()}><li className='hover:cursor-not-allowed'>About</li></Link>
                    </div>
                    <div className='border-b-2 pb-2 border-[rgb(209,205,205)]'>
                        <Link onClick={(e) => e.preventDefault()}><li className='hover:cursor-not-allowed'>Contact</li></Link>
                    </div>
                </ul>
                <div className='mt-12'>
                    <Link to="/register" onClick={toggleSidebar}>
                        <button className='lg:me-4 me-3 w-full shadow-[5.5px_5.5px_1px_0_rgba(40,40,40,0.5)] text-lg font-poppins hover:shadow-none lg-custom:hover:px-8 hover:px-7 transition-all duration-500 ease-linear bg-black text-white text-[17px] tracking-wide lg-custom:px-7 px-6 py-[10px] rounded-[34px]'>
                            Signup
                        </button>
                    </Link>
                    <Link to="/login" onClick={toggleSidebar}>
                        <button className='w-full mt-5 shadow-[5px_5px_1px_0_rgba(219,158,48,0.4)] text-lg font-poppins hover:shadow-none lg-custom:hover:px-8 hover:px-7 transition-all duration-500 ease-linear bg-[rgb(219,158,48)] text-white text-[17px] tracking-wide lg-custom:px-7 px-6 py-[10px] rounded-[32px]'>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
