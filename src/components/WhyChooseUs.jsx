import React from 'react';

const WhyChooseUs = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h2 className='font-aladin text-center tracking-[1.5px] text-gray-500 mt-3 lg:text-2xl sm:text-[22px] text-[20px]'>WHY CHOOSE OUR ISLAMIC INSTITUTE</h2>
                <h3 className='md-custom:w-[800px] lg-custom:text-6xl lg:text-[55px] md:text-[50px] sm:text-[44px] xs:text-[43px] 2xs-custom:text-[38px] text-[33px] font-philosopher text-center lg:mt-3 mt-2 lg-custom:leading-[58px] md:leading-[50px] sm:leading-[46px] xs:leading-[43px] 2xs-custom:leading-[40px] leading-[36px]'>WHY CHOOSE OUR ISLAMIC INSTITUTE OVER OTHERS</h3>
            </div>
            <div className='grid lg:grid-cols-4 xs-custom:grid-cols-2 grid-cols-1 xl:gap-10 lg-custom:gap-8 lg:gap-5 gap-8 mt-14'>
                <div className='flex flex-col items-center shadow-[0_2px_10px_0_rgba(0,0,0,0.2)] transition-transform transform hover:scale-105 hover:shadow-[0_2px_15px_0_rgba(0,0,0,0.2)] rounded-lg xl:p-9 lg-custom:p-7 p-5'>
                    <i className='fa-solid fa-list-check text-3xl text-emerald-700'></i>
                    <h3 className='text-[20px] text-gray-900 font-inter font-semibold mt-4 text-center'>Best Curriculum</h3>
                    <p className='text-[16px] text-gray-600 font-poppins mt-1 text-center'>We aim to provide our students with the best curriculum.</p>
                </div>
                <div className='flex flex-col items-center shadow-[0_2px_10px_0_rgba(0,0,0,0.2)] transition-transform transform hover:scale-105 hover:shadow-[0_2px_15px_0_rgba(0,0,0,0.2)] rounded-lg xl:p-9 lg-custom:p-7 p-5'>
                    <i className='fa-solid fa-chalkboard-user text-3xl text-emerald-700'></i>
                    <h3 className='text-[20px] text-gray-900 font-inter font-semibold mt-4 text-center'>Expert Teachers</h3>
                    <p className='text-[16px] text-gray-600 font-poppins mt-1 text-center'>Our teachers are well experienced in teaching islamic knowledge.</p>
                </div>
                <div className='flex flex-col items-center shadow-[0_2px_10px_0_rgba(0,0,0,0.2)] transition-transform transform hover:scale-105 hover:shadow-[0_2px_15px_0_rgba(0,0,0,0.2)] rounded-lg xl:p-9 lg-custom:p-7 p-5'>
                    <i className='fa-solid fa-lightbulb text-3xl text-emerald-700'></i>
                    <h3 className='text-[20px] text-gray-900 font-inter font-semibold mt-4 text-center'>Amazing Insights</h3>
                    <p className='text-[16px] text-gray-600 font-poppins mt-1 text-center'>Discover empowering insights through our blog posts.</p>
                </div>
                <div className='flex flex-col items-center shadow-[0_2px_10px_0_rgba(0,0,0,0.2)] transition-transform transform hover:scale-105 hover:shadow-[0_2px_15px_0_rgba(0,0,0,0.2)] rounded-lg xl:p-9 lg-custom:p-7 p-5'>
                    <i className='fa-solid fa-sitemap text-3xl text-emerald-700'></i>
                    <h3 className='text-[20px] text-gray-900 font-inter font-semibold mt-4 text-center'>Valuable Resources</h3>
                    <p className='text-[16px] text-gray-600 font-poppins mt-1 text-center'>We provide valuable islamic resources to our students.</p>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
