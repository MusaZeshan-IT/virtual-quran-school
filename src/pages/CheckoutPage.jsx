import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {

    const location = useLocation();
    const course = location?.state?.course;

    // Fallback if `course` is undefined
    if (!course) {
        return <div>Course information is missing.</div>;
    }


    return (
        <div className='py-28 bg-gray-100'>
            <div className='2xl:px-36 xl-custom:px-32 xl:px-28 lg-custom:px-24 lg:px-20 md-custom:px-16 px-8'>
                <h1 className='text-center text-5xl font-extrabold text-gray-800 mb-16'>Confirm Your Purchase</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-20 md-custom:gap-14 md:gap-10 gap-12'>
                    <div className='w-full md:max-w-[570px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
                        <div className='bg-gradient-to-r from-green-400 to-blue-500 p-6'>
                            <h2 className='text-2xl font-semibold text-white'>Pay in Meezan Bank</h2>
                        </div>
                        <div className='p-6'>
                            <div className='mb-3'>
                                <h3 className='text-lg font-semibold text-gray-900'>Account Name:</h3>
                                <p className='text-gray-700 text-base font-poppins'>BILAL SABIR</p>
                            </div>
                            <div className='mb-3'>
                                <h3 className='text-lg font-semibold text-gray-900'>Account Number:</h3>
                                <p className='text-gray-700 text-base font-poppins'>02050110275322</p>
                            </div>
                            <div className='mb-3'>
                                <h3 className='text-lg font-semibold text-gray-900'>IBAN:</h3>
                                <p className='text-gray-700 text-base font-poppins'>PK74MEZN0002050110275322</p>
                            </div>
                            <div className='mb-6'>
                                <h3 className='text-lg font-semibold text-gray-900'>Bank Branch:</h3>
                                <p className='text-gray-700 text-base font-poppins'>Meezan Bank-DHA Branch Lahore</p>
                            </div>
                            <div className='mb-2'>
                                <p className='text-gray-700 text-[15px] font-poppins'><span className='text-[16.2px] font-semibold font-sans text-gray-900'>Note:</span> Please transfer the exact amount to the account number provided. Email a screenshot of your receipt and your full name to the email below.</p>
                            </div>
                            <p className='text-gray-700 text-[15px] font-poppins'><span className='text-[16.2px] font-semibold font-sans text-gray-900'>Email:</span> virtualquran.billing@gmail.com</p>
                        </div>
                    </div>

                    <div className='w-full bg-white md:max-w-sm shadow-lg rounded-lg'>
                        <div className='bg-black p-6 rounded-t-xl'>
                            <h2 className='text-3xl font-semibold text-white'>Course Details</h2>
                        </div>
                        <div className='p-6'>
                            <div className='mb-3 mt-1'>
                                <h3 className='text-[19px] tracking-tight font-semibold text-gray-700'>Name:</h3>
                                <p className='text-[16.5px] text-gray-600 font-poppins'>{course.name}</p>
                            </div>
                            <div className='mb-3 mt-1'>
                                <h3 className='text-[19px] tracking-tight font-semibold text-gray-700'>Level:</h3>
                                <p className='text-[16.5px] text-gray-600 font-poppins'>{course.level}</p>
                            </div>
                            <div className='mb-3'>
                                <h3 className='text-[19px] tracking-tight font-semibold text-gray-700'>Instructor:</h3>
                                <p className='text-[16.5px] text-gray-600 font-poppins'>{course.tutor}</p>
                            </div>
                            <div className='mb-4'>
                                <h3 className='text-[19px] tracking-tight font-semibold text-gray-700'>Course Duration:</h3>
                                <p className='text-[16.5px] text-gray-600 font-poppins'>{course.duration}</p>
                            </div>
                            <div>
                                <span className='text-[21px] tracking-tight font-semibold text-gray-800'>Fare:</span>
                                <span className='text-[19px] text-gray-700 font-poppins'> ${course.fee}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
