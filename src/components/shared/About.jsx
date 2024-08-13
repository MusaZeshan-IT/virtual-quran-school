import React from 'react';
import StarGoldIcon from '../../assets/star-gold.png';
import Vision from '../../assets/vision-icon.png';
import Mission from '../../assets/mission-icon.png';

const About = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <img className='h-14 w-14' src={StarGoldIcon} alt="" />
                <h2 className='font-aladin tracking-[1.5px] text-gray-500 mt-3 text-2xl'>WELCOME TO THE VIRTUAL QURAN SCHOOL</h2>
                <h3 className='text-6xl font-philosopher text-center mt-4 leading-[58px]'>IN THE NAME OF ALLAH <br /> THE BENEFICIENT THE MERCIFUL</h3>
            </div>
            <div className='flex gap-x-16 justify-between mt-10'>
                <p className='text-xl text-gray-500 font-sans w-1/2 leading-[32px]'>
                    At Virtual Quran School, we provide personalized online Quranic education that is high-quality and accessible. Our educators guide students worldwide in their spiritual journey, helping them connect deeply with the Quran. We aim to make each lesson engaging, ensuring learners grow in their understanding and faith from the comfort of their homes.
                </p>
                <div className='w-1/2 flex flex-col gap-y-10'>
                    <div className='flex'>
                        <img className='border-2 w-[75px] h-[75px] border-yellow-700 rounded-full p-2 bg-transparent hover:bg-yellow-700 transition-colors duration-500 ease-in-out' src={Mission} alt="" />
                        <div className='ms-5'>
                            <h3 className='text-4xl font-philosopher'>OUR MISSION</h3>
                            <p className='text-lg text-gray-500 font-sans leading-6 mt-2'>To offer high-quality, accessible Quranic education online, fostering spiritual growth from home.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img className='border-2 w-[75px] h-[75px] border-yellow-700 rounded-full p-2 bg-transparent hover:bg-yellow-700 transition-colors duration-500 ease-in-out' src={Vision} alt="" />
                        <div className='ms-5'>
                            <h3 className='text-4xl font-philosopher'>OUR VISION</h3>
                            <p className='text-lg text-gray-500 font-sans leading-6 mt-2'>To be the top platform for personalized online Quranic education, inspiring global learners in their faith.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
