import React from 'react';
import { Link } from 'react-router-dom';

const PaymentSuccessPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
            <div className="my-24 xs-custom:w-[540px] bg-white shadow-[0_0_8px_2px_rgba(0,0,0,0.3)] rounded-lg p-5 2xs-custom:p-7 xs:p-9 lg:p-12 text-center">
                {/* Success Checkmark */}
                <div className="flex justify-center">
                    <i className='text-6xl text-green-500 fa-solid fa-check'></i>
                </div>

                {/* Success Message */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6">
                    Payment Successful!
                </h1>
                <p className="text-gray-500 mt-4 xs:text-lg md:text-xl">
                    Thank you for your purchase. Your transaction has been completed successfully.
                </p>

                {/* Transaction Details */}
                <div className="mt-8 bg-gray-100 shadow-[0_0_2px_0.1px_rgba(0,0,0,0.3)] rounded-lg p-4 md:p-6 grid place-items-center">
                    <div className='w-60'>
                        <h2 className="text-xl md:text-2xl text-start font-semibold text-gray-700">Transaction Details:</h2>
                        <div className='mt-2 flex flex-col items-start'>
                            <p className="text-gray-600">
                                <span className="font-medium">Course Purchased:</span> Virtual Quran
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Date:</span> September 12, 2024
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Amount Paid:</span> $50.00
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="mt-8">
                    <Link to="/courses">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;
