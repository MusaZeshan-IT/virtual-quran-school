import React from 'react';

const Spinner = ({ message }) => {
    return (
        <div className='bg-gray-200 py-48 flex flex-col justify-center items-center'>
            <div className="animate-spin rounded-full h-20 w-20 border-[6px] border-emerald-600 border-l-white"></div>
            <p className="text-lg font-semibold text-gray-700 mt-5">{message}</p>
        </div>
    );
}

export default Spinner;
