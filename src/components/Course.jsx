import React from 'react';

const Course = ({ courseName, courseFor, courseDuration, courseClassTime, studentsEnrolled, courseFee }) => {
    return (
        <div className='rounded-lg px-6 py-4 w-full bg-gray-100 shadow-[0px_0px_3px_0.1px_rgb(0,0,0)] font-poppins'>
            <h2 className='text-[26px] font-semibold leading-[30px]'>{courseName}</h2>
            <div className='border-y mt-4 py-1 border-gray-300 flex justify-between'>
                <div className="flex flex-col">
                    <span className='text-amber-600 text-[17px] font-aladin tracking-wider font-black'>{courseDuration}</span>
                    <span className='font-semibold'>Duration</span>
                </div>
                <div className="flex flex-col">
                    <span className='text-amber-600 text-[17px] font-aladin tracking-wider font-bold'>{courseClassTime}</span>
                    <span className='font-semibold'>Class Time</span>
                </div>
                <div className="flex flex-col">
                    <span className='text-amber-600 text-[17px] font-aladin tracking-wider font-bold'>{studentsEnrolled}</span>
                    <span className='font-semibold'>Enroll</span>
                </div>
            </div>
            <p className='text-[rgb(133,128,128)] mt-6'>{courseFor}</p>
            <div className="flex justify-between items-end">
                <button className='bg-yellow-600 text-white h-11 grid place-items-center text-sm font-semibold px-5 rounded-[7px] mt-6'>Study Now</button>
                <span className='bg-[rgb(252,252,252)] shadow-[0px_0px_1px_1px_rgb(0,0,0)] text-lg font-semibold px-5 py-[10px] rounded-[7px] mt-6'>$ {courseFee}</span>
            </div>
        </div>
    );
}

export default Course;
