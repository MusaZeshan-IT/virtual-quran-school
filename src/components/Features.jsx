import React from 'react';
import GoldenMosque from '../assets/grand-golden-mosque-animated.png';
import Banner from '../assets/banner.png';

const Features = () => {
    return (
        <div>
            <div className='flex justify-between gap-x-20'>
                <div className='w-1/2'>
                    <h2 className='font-aladin tracking-[1.5px] text-gray-600 mt-3 text-xl'>WE PROSPER THE HOUSE OF ALLAH</h2>
                    <h3 className='text-[58px] font-philosopher mt-2 leading-[58px]'>WHAT WE PROVIDE</h3>
                    <div className="grid grid-cols-2 mt-16 gap-10">
                        <div className='flex flex-col items-center'>
                            <i className="fa-solid fa-book-quran text-yellow-600 text-5xl"></i>
                            <h2 className='text-3xl font-philosopher mt-2 leading-[58px]'>Quran Studies</h2>
                            <p className='text-lg text-center font-poppins tracking-tight text-gray-500'>We offer comprehensive and personalized Quran studies for learners at all levels.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className="fa-solid fa-mosque text-yellow-600 text-5xl"></i>
                            <h2 className='text-3xl font-philosopher mt-2 leading-[58px]'>Islamic Values</h2>
                            <p className='text-lg text-center font-poppins tracking-tight text-gray-500'>We deliver transformative and personalized Islamic values education for every learner.</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className="fa-solid fa-earth-americas text-yellow-600 text-5xl"></i>
                            <h2 className='text-3xl font-philosopher mt-2 leading-[58px]'>Online Teaching</h2>
                            <p className='text-lg text-center font-poppins tracking-tight text-gray-500'>We offer dynamic and interactive online teaching tailored for every student.</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 relative'>
                    <img className='absolute left-28 bottom-28 h-[500px] z-0' src={Banner} alt="Banner" />
                    <img className='absolute left-28 w-[500px] h-[580px] z-10' src={GoldenMosque} alt="Golden Mosque" />
                </div>
            </div>
        </div>
    );
}

export default Features;
