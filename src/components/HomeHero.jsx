import React from 'react';
import Kid from '../assets/hero-img.png';
import BlackMasjid from '../assets/black-masjid.png';
import { Link } from 'react-router-dom';

const HomeHero = () => {
    return (
        <div className='relative overflow-hidden  h-full bg-[rgb(8,81,63)]'>
            {/* Background image with reduced opacity */}
            <div className='absolute inset-0'>
                <img
                    src={BlackMasjid}
                    alt="Background"
                    className='w-full h-full object-cover relative lg:right-5'
                    style={{ opacity: 0.2 }} // Adjust opacity here
                />
            </div>
            {/* Main content */}
            <div className='relative bottom-10 flex lg:flex-row flex-col-reverse justify-between items-center pb-10 2xl:px-32 xl-custom:px-24 xl:px-16 lg-custom:px-10 md:px-8 px-4'>
                <div>
                    <h1 className='xl:text-[65px] lg-custom:text-[60px] lg:text-[55px] md:text-[80px] sm:text-[68px] xs:text-[52px] text-[40px] xl:leading-[65px] lg-custom:leading-[60px] lg:leading-[55px] md:leading-[80px] sm:leading-[68px] xs:leading-[52px] leading-[40px] text-white lg:mt-28 mt-32 text-center font-philosopher'>PRAY TO ALLAH <br /> AND BE <br /> CONFIDENT OF A <br /> RESPONSE</h1>
                    <p className='text-center text-white font-poppins xl:text-xl lg-custom:text-[19px] lg:text-[18px] md:text-[24px] sm:text-[22px] text-[18.2px] xs:block hidden mt-[26px]'>We provide personalized online Quran classes.</p>
                    <p className='text-center xs:hidden block text-white font-poppins xs:text-[18.2px] text-[16.5px] mt-[26px]'>We provide personalized Quran classes.</p>
                    <p className='text-center text-white font-poppins xl:text-xl lg-custom:text-[19px] lg:text-[18px] md:text-[24px] sm:text-[22px] xs:text-[18.2px] text-[16px] xs:mt-2 mt-1'>This makes Quranic education accessible and meaningful.</p>
                    <Link to="/courses">
                        <button type='button' className='mx-auto hover:shadow-none hover:px-10 transition-all duration-500 ease-linear xl:mt-20 lg-custom:mt-16 lg:mt-14 mt-20 bg-[rgb(219,158,48)] flex items-center text-white lg:text-[17px] md:text-[24px] sm:text-[20px] text-[18px] font-semibold px-8 py-3 rounded-[28px] shadow-orange-sun'>
                            <i className='fa-solid fa-circle-right lg:mt-0 mt-1 md:text-[30px] text-[26px] me-2'></i>
                            Check out our Courses
                        </button>
                    </Link>
                </div>
                <img className='xl:w-[540px] xl:h-[540px] lg-custom:w-[500px] lg-custom:h-[500px] lg:w-[460px] lg:h-[460px] md:w-[600px] md:h-[600px] sm:w-[520px] sm:h-[520px] xs:w-[460px] xs:h-[460px] 2xs-custom:w-[400px] 2xs-custom:h-[400px] h-[340px] w-[340px] relative lg:top-6 top-20' src={Kid} alt="" />
            </div>
        </div>
    );
}

export default HomeHero;
