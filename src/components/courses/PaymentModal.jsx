import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PaymentModal = ({ isOpen, onClose, course }) => {

    if (!isOpen) return null;

    const handleJazzCash = () => {
        // Redirect to JazzCash payment initiation URL
        window.location.href = '/jazzcash/initiate-payment';
    };

    return (
        <div className="px-4 fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gradient-to-r from-white via-[rgb(250,250,250)] to-white py-10 2xs-custom:px-7 px-5 rounded-lg shadow-lg relative w-full max-w-sm">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h2 className="2xs-custom:text-[24.5px] 2xs:text-[23.5px] text-[22.5px] font-poppins tracking-tight mb-1">Choose Payment Method</h2>
                <p className="text-gray-600 font-poppins text-[15.5px] ms-[1px] mb-10">
                    Please select a payment method to proceed with your purchase.
                </p>
                <button
                    onClick={handleJazzCash}
                    className="flex items-center justify-center gap-x-2 font-poppins text-[17px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.5)] py-1 w-full rounded-md transition-all duration-300 hover:gap-x-3"
                >
                    <img className='rounded-full' src="https://img.logo.dev/jazzcash.com.pk/?token=pk_EjquC7fkRSmi7b7JLt0J7A&size=40&format=png" />
                    <span>Pay with JazzCash</span>
                    <i className='fa-solid fa-arrow-right'></i>
                </button>
                <Link state={{ course: course }} to={'/checkout'}>
                    <button className="flex items-center justify-center gap-x-2 font-poppins text-[17px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.5)] py-2 w-full rounded-md mt-3 transition-all duration-300 hover:gap-x-3">
                        <img className='rounded-full' src="https://img.logo.dev/paypal.com?token=pk_EjquC7fkRSmi7b7JLt0J7A&size=30&format=png" />
                        <span>Pay with PayPal</span>
                        <i className='fa-solid fa-arrow-right'></i>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PaymentModal;
