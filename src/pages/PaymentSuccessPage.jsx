import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Redirect to the homepage or any other page
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50">
            <div className="bg-white w-[500px] p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h2>
                <p className="text-lg text-gray-500 font-poppins text-center mx-auto w-[97%]">Thank you for your purchase. Your transaction has been completed successfully.</p>
                <button
                    onClick={handleGoHome}
                    className="bg-green-600 text-white mt-10 font-poppins py-2 px-4 rounded-md hover:bg-green-700"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
