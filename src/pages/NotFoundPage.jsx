import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/shared/Hero';

const NotFoundPage = () => {
    return (
        <div>
            <Hero />
            <div className='my-28 2xl:px-36 xl-custom:px-32 xl:px-28 lg-custom:px-24 lg:px-20 md-custom:px-16 px-8'>
                <div className="flex lg:flex-row flex-col gap-16 items-center justify-center">
                    <div className='lg:w-[70%] font-poppins'>
                        <h1 className='sm:text-[160px] xs-custom:text-[140px] text-[120px] font-black text-center sm:leading-[160px] xs:leading-[140px] leading-[120px]'>404</h1>
                        <h3 className='sm:text-[32px] xs-custom:text-[26px] text-[20px] font-semibold text-center font-poppins xs-custom:mt-2 mt-0'>Oops! You're On The Wrong Place</h3>
                        <p className='sm:text-[15.8px] xs-custom:text-[15px] text-[14px] font-poppins text-gray-500 font-semibold text-center xs-custom:mt-4 mt-3'>We Can't Seem to Find the Page You are Looking for</p>
                        <div className='flex justify-center'>
                            <Link to="/"><button className='bg-[rgb(255,208,80)] mx-auto text-black hover:bg-[rgb(29,142,90)] hover:text-white hover:font-medium font-bold text-center rounded-md font-poppins w-52 py-4 mt-12'>Back to Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;
