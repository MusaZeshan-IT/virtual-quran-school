import React from 'react';
import GoldenMosque from '../assets/grand-golden-mosque-animated.png';
import Banner from '../assets/banner.png';
import TabBanner from '../assets/tab-banner.png';

const Features = () => {
    return (
        <div>
            <div className='flex lg:flex-row flex-col-reverse justify-between gap-x-20 2xl:ps-36 xl-custom:ps-32 xl:ps-28 lg-custom:ps-24 lg:ps-20'>
                <div className='lg:w-1/2 lg:px-0 md-custom:px-16 px-8'>
                    <h2 className='font-aladin tracking-[1.5px] lg:text-start text-center text-gray-600 lg:mt-3 mt-14 xl:text-xl lg-custom:text-[17.5px] text-[16.5px]'>WE PROSPER THE HOUSE OF ALLAH</h2>
                    <h3 className='xl:text-[58px] lg-custom:text-[53px] text-[48px] font-philosopher lg-custom:mt-2 mt-0 lg:text-start text-center leading-[58px]'>WHAT WE PROVIDE</h3>
                    <div className="grid sm:grid-cols-2 grid-cols-1 mt-16 gap-10">
                        <div className='flex flex-col items-center'>
                            <i className="fa-solid fa-mosque text-yellow-600 text-5xl"></i>
                            <h2 className='text-[26px] tracking-tighter font-poppins mt-4'>Islamic Values</h2>
                            <p className='text-[16.5px] sm:w-full xs:w-[70%] w-full text-center font-poppins tracking-tight text-gray-500'>We deliver transformative Islamic values education for every learner.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className="fa-solid fa-book-quran text-yellow-600 text-5xl"></i>
                            <h2 className='text-[26px] tracking-tighter font-poppins mt-4'>Quran Studies</h2>
                            <p className='text-[16.5px] sm:w-full xs:w-[70%] w-full text-center font-poppins tracking-tight text-gray-500'>We offer personalized and comprehensive Quran studies for learners of all levels.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className="fa-solid fa-earth-americas text-yellow-600 text-5xl"></i>
                            <h2 className='text-[26px] tracking-tighter font-poppins mt-4'>Online Teaching</h2>
                            <p className='text-[16.5px] sm:w-full xs:w-[70%] w-full text-center font-poppins tracking-tight text-gray-500'>We offer dynamic, interactive online teaching tailored for each student.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 flex justify-center items-center relative'>
                    <img className='absolute top-0 left-0 xl:h-full lg-custom:h-[90%] lg:h-[80%] lg:block hidden h-full lg:w-auto w-[700px] z-0' src={Banner} alt="Banner" />
                    <img className='absolute top-0 left-0 z-0 md:h-full sm:h-[90%] h-[80%] w-full' src={TabBanner} alt="Banner" />
                    <img className='relative md:bottom-0 bottom-6 sm:w-[500px] xs:w-[450px] w-[85%] xl:h-full md:h-full z-10' src={GoldenMosque} alt="Golden Mosque" />
                </div>
            </div>
        </div>
    );
}

export default Features;
