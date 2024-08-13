import React from 'react';
import KidReadingQuran from '../assets/kid-reading-quran.jpeg';
import BlackMasjid from '../assets/black-masjid.png';

const Hero = () => {
    return (
        <div className='relative overflow-hidden bg-emerald-800'>
            {/* Background image with reduced opacity */}
            <div className='absolute inset-0'>
                <img
                    src={BlackMasjid}
                    alt="Background"
                    className='w-full h-full object-cover relative right-5'
                    style={{ opacity: 0.2 }} // Adjust opacity here
                />
            </div>
            {/* Main content */}
            <div className='relative flex justify-between items-center pt-16 pb-10 px-24'>
                <div>
                    <h1 className='text-5xl text-white text-center font-philosopher leading-[60px] w-[450px]'>THE BEST OF PEOPLE ARE THOSE WHO ARE BEST IN CHARACTER</h1>
                    <p className='w-[500px] text-center text-white font-sans text-xl mt-5'>We provide personalized online Quran classes, making Quranic education accessible and meaningful for learners everywhere.</p>
                </div>
                <img className='w-80 shadow-[0_0px_4px_0px_rgb(200,180,48)] border-[3px] border-white h-80 rounded-full' src={KidReadingQuran} alt="" />
            </div>
        </div>
    );
}

export default Hero;
