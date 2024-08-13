import React from 'react';
import GrandMosque from '../assets/grand-mosque.jpg';

const IslamicPillars = () => {
    return (
        <div
            className="relative overflow-hidden w-full h-[600px] flex items-center justify-center text-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${GrandMosque})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div>
                <h2 className='font-aladin tracking-[1.5px] text-orange-500 mt-3 text-xl'>ABOUT ESSENTIAL</h2>
                <h3 className='text-6xl font-philosopher mt-2 text-white'>PILLARS OF ISLAM</h3>
                <div className='grid grid-cols-5 gap-x-16 mt-20'>
                    <div className='flex flex-col items-center gap-y-6'>
                        <div className='bg-orange-500 border-[3px] border-white border-dotted rounded-full grid place-items-center h-32 w-32'>
                            <i className='fa-regular fa-hand-point-up text-6xl text-white'></i>
                        </div>
                        <div>
                            <h3 className='text-3xl text-white font-cinzel-decorative'>Shahadah</h3>
                            <p className='text-2xl text-amber-500'>(Faith)</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-6'>
                        <div className='bg-orange-500 border-[3px] border-white border-dotted rounded-full grid place-items-center h-32 w-32'>
                            <i className='fa-solid fa-person-praying text-6xl text-white'></i>
                        </div>
                        <div>
                            <h3 className='text-3xl text-white font-cinzel-decorative'>Salah</h3>
                            <p className='text-2xl text-amber-500'>(Prayer)</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-6'>
                        <div className='bg-orange-500 border-[3px] border-white border-dotted rounded-full grid place-items-center h-32 w-32'>
                            <i className='fa-solid fa-utensils text-6xl text-white'></i>
                        </div>
                        <div>
                            <h3 className='text-3xl text-white font-cinzel-decorative'>Sawm</h3>
                            <p className='text-2xl text-amber-500'>(Fasting)</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-6'>
                        <div className='bg-orange-500 border-[3px] border-white border-dotted rounded-full grid place-items-center h-32 w-32'>
                            <i className='fa-solid fa-sack-dollar text-6xl text-white'></i>
                        </div>
                        <div>
                            <h3 className='text-3xl text-white font-cinzel-decorative'>Zakat</h3>
                            <p className='text-2xl text-amber-500'>(Almsgiving)</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-y-6'>
                        <div className='bg-orange-500 border-[3px] border-white border-dotted rounded-full grid place-items-center h-32 w-32'>
                            <i className='fa-solid fa-kaaba text-6xl text-white'></i>
                        </div>
                        <div>
                            <h3 className='text-3xl text-white font-cinzel-decorative'>Hajj</h3>
                            <p className='text-2xl text-amber-500'>(Pilgrimage)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IslamicPillars;
