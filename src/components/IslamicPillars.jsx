import React from 'react';
import GrandMosque from '../assets/grand-mosque.jpg';

const IslamicPillars = () => {
    return (
        <div
            className="relative overflow-hidden w-full lg:h-[600px] h-full flex items-center justify-center text-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${GrandMosque})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='p-6'>
                <h2 className='font-aladin tracking-[1.5px] text-[rgb(219,158,49)] mt-3 text-xl'>ABOUT ESSENTIAL</h2>
                <h3 className='text-6xl font-philosopher mt-2 text-white'>PILLARS OF ISLAM</h3>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-2 md:gap-16 gap-x-10 xs:gap-y-16 gap-y-12 mt-20'>
                    <div className='flex flex-col items-center gap-y-6'>
                        <div className='bg-[rgb(219,158,49)] border-[3px] border-white border-dotted rounded-full grid place-items-center h-32 w-32'>
                            <i className='fa-regular fa-hand-point-up text-6xl text-white'></i>
                        </div>
                        <div>
                            <h3 className='text-3xl text-white font-cinzel-decorative'>Shahadah</h3>
                            <p className='text-2xl text-[rgb(219,158,49)]'>(Faith)</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-6'>
                        <div className='bg-[rgb(219,158,49)] border-[3px] border-white border-dotted rounded-full grid place-items-center h-32 w-32'>
                            <i className='fa-solid fa-person-praying text-6xl text-white'></i>
                        </div>
                        <div>
                            <h3 className='text-3xl text-white font-cinzel-decorative'>Salah</h3>
                            <p className='text-2xl text-[rgb(219,158,49)]'>(Prayer)</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-6'>
                        <div className='bg-[rgb(219,158,49)] border-[3px] border-white border-dotted rounded-full grid place-items-center h-32 w-32'>
                            <i className='fa-solid fa-utensils text-6xl text-white'></i>
                        </div>
                        <div>
                            <h3 className='text-3xl text-white font-cinzel-decorative'>Sawm</h3>
                            <p className='text-2xl text-[rgb(219,158,49)]'>(Fasting)</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-6'>
                        <div className='bg-[rgb(219,158,49)] border-[3px] border-white border-dotted rounded-full grid place-items-center h-32 w-32'>
                            <i className='fa-solid fa-sack-dollar text-6xl text-white'></i>
                        </div>
                        <div>
                            <h3 className='text-3xl text-white font-cinzel-decorative'>Zakat</h3>
                            <p className='text-2xl text-[rgb(219,158,49)]'>(Almsgiving)</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-6'>
                        <div className='bg-[rgb(219,158,49)] border-[3px] border-white border-dotted rounded-full grid place-items-center h-32 w-32'>
                            <i className='fa-solid fa-kaaba text-6xl text-white'></i>
                        </div>
                        <div>
                            <h3 className='text-3xl text-white font-cinzel-decorative'>Hajj</h3>
                            <p className='text-2xl text-[rgb(219,158,49)]'>(Pilgrimage)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IslamicPillars;
