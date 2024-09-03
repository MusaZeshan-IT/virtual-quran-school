import React from 'react';
import StarGoldIcon from '../../assets/star-gold.png';
import Vision from '../../assets/vision-icon.png';
import Mission from '../../assets/mission-icon.png';
import { Link } from 'react-router-dom';

const About = ({ isAboutPage = false }) => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <img className='h-14 w-14' src={StarGoldIcon} alt="" />
                <h2 className='font-aladin text-center tracking-[1.5px] text-gray-500 mt-3 lg:text-2xl sm:text-[22px] text-[20px]'>WELCOME TO THE VIRTUAL QURAN SCHOOL</h2>
                <h3 className='lg-custom:text-6xl lg:text-[55px] sm:text-[54px] xs:text-[49px] 2xs-custom:text-[42px] text-[33px] font-philosopher text-center lg:mt-3 mt-2 lg-custom:leading-[58px] sm:leading-[54px] xs:leading-[49px] 2xs-custom:leading-[42px] 2xs-custom:block hidden'>IN THE NAME OF ALLAH <br /> THE BENEFICIENT THE MERCIFUL</h3>
                <h3 className='2xs-custom:hidden block font-philosopher text-center text-[40px] leading-[40px]'>IN THE NAME OF ALLAH THE BENEFICIENT THE MERCIFUL</h3>
            </div>
            <div className='flex md:flex-row flex-col lg:gap-x-16 md-custom:gap-x-12 gap-x-8 justify-between mt-14'>
                <div className='md:w-1/2 flex flex-col md:items-start items-center'>
                    <p className='md:text-[18px] text-[19.5px] md:text-start text-center text-gray-500 font-poppins leading-[32px]'>
                        At Virtual Quran School, we provide personalized online Quranic education that is high-quality and accessible. Our educators guide students worldwide in their spiritual journey, helping them connect deeply with the Quran. We aim to make each lesson engaging, ensuring learners grow in their understanding and faith from the comfort of their homes.
                    </p>
                    {isAboutPage ? (
                        <button type='button' className='hover:shadow-none hover:text-[rgb(219,158,48)] hover:px-12 transition-all duration-500 ease-linear border-2 border-[rgb(219,158,48)] text-[18px] font-poppins py-3 px-10 rounded-[30px] shadow-[7px_5.5px_1px_0.1px_rgba(219,158,48,0.6)] mt-10'>Contact Us</button>
                    ) : (
                        <Link to="/about">
                            <button type='button' className='hover:shadow-none hover:text-[rgb(219,158,48)] hover:px-12 transition-all duration-500 ease-linear border-2 border-[rgb(219,158,48)] text-[18px] font-poppins py-3 px-10 rounded-[30px] shadow-[7px_5.5px_1px_0.1px_rgba(219,158,48,0.6)] mt-10'>Read More</button>
                        </Link>
                    )}
                </div>
                <div className='md:w-1/2 flex flex-col md:gap-y-10 gap-y-10 md:mt-0 mt-16'>
                    <div className='flex sm:flex-row flex-col items-center'>
                        <img className='border-2 w-[85px] h-[85px] border-[rgb(219,158,48)] rounded-full p-4 bg-transparent hover:bg-orange-300 transition-colors duration-500 ease-in-out' src={Mission} alt="" />
                        <div className='ms-5'>
                            <h3 className='text-4xl md:mt-0 mt-2 sm:text-start text-center font-philosopher'>OUR MISSION</h3>
                            <p className='md:text-[16px] sm:text-start text-center text-[18px] text-gray-500 font-poppins md:leading-6 leading-[26px] mt-3'>To offer high-quality, accessible Quranic education online, fostering spiritual growth from home.</p>
                        </div>
                    </div>
                    <div className='flex sm:flex-row flex-col items-center'>
                        <img className='border-2 w-[85px] h-[85px] border-[rgb(219,158,48)] rounded-full p-4 bg-transparent hover:bg-orange-300 transition-colors duration-500 ease-in-out' src={Vision} alt="" />
                        <div className='ms-5'>
                            <h3 className='text-4xl md:mt-0 mt-2 sm:text-start text-center font-philosopher'>OUR VISION</h3>
                            <p className='md:text-[16px] sm:text-start text-center text-[18px] text-gray-500 font-poppins md:leading-6 leading-[26px] mt-3'>To be the top platform for personalized online Quranic education, inspiring global learners in their faith.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
