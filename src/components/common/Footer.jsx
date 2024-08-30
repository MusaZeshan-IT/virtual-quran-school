import React from 'react';
import FooterBg from '../../assets/footer-bg.jpg';
import AllahName from '../../assets/allah-name.png';

const Footer = () => {
    return (
        <div className="relative lg:h-[620px] md:h-[920px] sm-custom:h-[1220px] sm:h-[1260px] xs-custom:h-[1310px] xs:h-[1280px] h-[1260px] w-full">
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${FooterBg})` }}
            >
                <div
                    className="absolute inset-0 bg-[rgb(0,83,37)] opacity-70"
                ></div>
                <div className="relative lg:top-[70px] top-16 z-10 2xl:px-32 xl-custom:px-24 xl:px-16 lg-custom:px-10 lg:px-8 md:px-16 px-8 text-white">
                    <div className='lg:hidden flex justify-center'>
                        <svg fill='rgb(219, 158, 48)' className="fill-theme md:w-[25%] sm-custom:w-[30%] sm:w-[40%] w-[50%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 281">
                            <g>
                                <path d="M184,72c0,45.67,0,91.33,0,137c-3.3,4.84-7.56,8.35-13.42,9.66c-2.18,0.49-3.38,1.86-3.81,4.08
                                        c-2.43,12.48-11.13,17.35-22.76,18.52c-2.09,0.21-4.01,0.61-5.04,2.62c-5.68,11.04-15.46,16.87-26.43,21.58
                                        C104.74,268.8,97.36,273.12,93,281c-0.33,0-0.67,0-1,0c-5.44-8.58-13.89-13.21-22.85-16.97c-9.31-3.91-17.25-9.39-22.27-18.33
                                        c-1.76-3.14-3.91-4.36-7.49-4.54c-12.32-0.6-19.47-6.63-22.47-18.67c-0.51-2.04-1.41-3.36-3.43-3.73C7.77,217.7,3.57,214.35,0,210
                                        c0-46.33,0-92.67,0-139c3.57-4.35,7.77-7.7,13.5-8.76c1.75-0.32,2.78-1.38,3.34-3.24c4.15-13.84,9.21-17.89,24.05-19.28
                                        c2.14-0.2,3.87-0.73,4.93-2.74c5.5-10.43,14.54-16.43,25.15-20.84C79.31,12.67,87,8,92,0c0.33,0,0.67,0,1,0
                                        c5.02,8.78,13.53,13.02,22.26,16.8c9.55,4.14,17.87,9.63,22.88,19.07c1.53,2.88,3.8,3.71,6.87,3.97
                                        c11.74,1.01,18.55,6.68,21.6,17.95c0.69,2.54,1.86,4.14,4.45,4.71C176.75,63.77,180.78,67.35,184,72z">
                                </path>
                                <image xlinkHref={AllahName} x="33" y="80" height="120" width="120" />
                            </g>
                        </svg>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md-custom:gap-x-0 gap-10 mt-20'>
                        <div>
                            <div>
                                <h4 className="mb-0 font-cinzel-decorative text-2xl">Information</h4>
                                <p className="mb-0 mt-10 leading-[26px] text-[16px] sm:w-11/12 font-poppins">
                                    At Virtal Quran School, we are experts in engineering, education, and scholarship, offering high-quality online Quranic classes. Our goal is to provide accessible, transformative learning experiences that foster spiritual and intellectual growth.
                                </p>
                            </div>
                            <div className="inline-flex items-center mt-10">
                                <a className='border-r-2 border-[rgb(161,155,155)] hover:text-orange-500 pe-5' href="https://twitter.com" title="Twitter" itemProp="url" target="_blank"><i className="fa-brands text-lg fa-twitter"></i></a>
                                <a className='border-r-2 border-[rgb(161,155,155)] hover:text-orange-500 px-5' href="https://facebook.com" title="Facebook" itemProp="url" target="_blank"><i className="fa-brands text-lg fa-facebook-f"></i></a>
                                <a className='border-r-2 border-[rgb(161,155,155)] hover:text-orange-500 px-5' href="https://linkedin.com" title="Linkedin" itemProp="url" target="_blank"><i className="fa-brands text-lg fa-linkedin-in"></i></a>
                                <a className='hover:text-orange-500 ps-5' href="https://instagram.com" title="Instagram" itemProp="url" target="_blank"><i className="fa-brands text-lg fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className='lg:flex hidden justify-center'>
                            <svg fill='rgb(219, 158, 48)' className="fill-theme relative lg-custom:left-28 lg:left-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 281">
                                <g>
                                    <path d="M184,72c0,45.67,0,91.33,0,137c-3.3,4.84-7.56,8.35-13.42,9.66c-2.18,0.49-3.38,1.86-3.81,4.08
                                        c-2.43,12.48-11.13,17.35-22.76,18.52c-2.09,0.21-4.01,0.61-5.04,2.62c-5.68,11.04-15.46,16.87-26.43,21.58
                                        C104.74,268.8,97.36,273.12,93,281c-0.33,0-0.67,0-1,0c-5.44-8.58-13.89-13.21-22.85-16.97c-9.31-3.91-17.25-9.39-22.27-18.33
                                        c-1.76-3.14-3.91-4.36-7.49-4.54c-12.32-0.6-19.47-6.63-22.47-18.67c-0.51-2.04-1.41-3.36-3.43-3.73C7.77,217.7,3.57,214.35,0,210
                                        c0-46.33,0-92.67,0-139c3.57-4.35,7.77-7.7,13.5-8.76c1.75-0.32,2.78-1.38,3.34-3.24c4.15-13.84,9.21-17.89,24.05-19.28
                                        c2.14-0.2,3.87-0.73,4.93-2.74c5.5-10.43,14.54-16.43,25.15-20.84C79.31,12.67,87,8,92,0c0.33,0,0.67,0,1,0
                                        c5.02,8.78,13.53,13.02,22.26,16.8c9.55,4.14,17.87,9.63,22.88,19.07c1.53,2.88,3.8,3.71,6.87,3.97
                                        c11.74,1.01,18.55,6.68,21.6,17.95c0.69,2.54,1.86,4.14,4.45,4.71C176.75,63.77,180.78,67.35,184,72z">
                                    </path>
                                    <image xlinkHref={AllahName} x="33" y="80" height="120" width="120" />
                                </g>
                            </svg>
                        </div>
                        <div className='flex md:justify-end md:mt-0 mt-8'>
                            <div className='flex flex-col gap-y-7'>
                                <h4 className="font-cinzel-decorative text-2xl mb-4">Contact Info</h4>
                                <div className='flex items-center gap-x-3'>
                                    <div className='grid place-items-center shadow-[0_0_1px_1.5px_rgba(255,255,255,1)] bg-[rgb(179,169,30)] w-12 h-12 rounded-full'>
                                        <i className='fa-regular fa-envelope'></i>
                                    </div>
                                    <span className='font-poppins text-lg'>virtualquran.info@gmail.com</span>
                                </div>
                                <div className='flex items-center gap-x-3'>
                                    <div className='grid place-items-center shadow-[0_0_1px_1.5px_rgba(255,255,255,1)] bg-[rgb(179,169,30)] w-12 h-12 rounded-full'>
                                        <i className='fa-solid fa-location-dot'></i>
                                    </div>
                                    <span className='font-poppins text-lg'>Lahore, Pakistan</span>
                                </div>
                                <div className='flex items-center gap-x-3'>
                                    <div className='grid place-items-center shadow-[0_0_1px_1.5px_rgba(255,255,255,1)] bg-[rgb(179,169,30)] w-12 h-12 rounded-full'>
                                        <i className='fa-solid fa-phone'></i>
                                    </div>
                                    <span className='font-poppins text-lg'>+92 301 6223795</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-t border-[rgb(109,107,107)] mt-20'>
                        <p className='font-poppins text-center mt-10'>Virtal Quran School &copy; Copyright 2024, <span className='text-[rgb(221,178,35)]'>All Rights Reserved</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
