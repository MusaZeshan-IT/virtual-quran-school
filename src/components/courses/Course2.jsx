import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {

    function convertTo12HourFormat(time) {
        // Split the time string into hours and minutes
        const [hour, minute] = time.split(":").map(Number);

        // Determine if it's AM or PM
        const ampm = hour >= 12 ? "PM" : "AM";

        // Convert hour to 12-hour format
        const hour12 = hour % 12 || 12;

        // Return the formatted time
        return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
    }

    return (
        <div className='rounded-lg px-5 py-6 w-full bg-white shadow-[0px_0px_3px_0.1px_rgb(0,0,0)] font-inter'>
            <h2 className='text-[26px] font-semibold leading-[30px]'>{course.name}</h2>
            <div className='border-y mt-4 py-1 border-gray-300 flex justify-between'>
                <div className="flex flex-col">
                    <span className='text-emerald-600 text-[17px] font-bold'>{course.tutor}</span>
                    <span className='font-semibold'>Instructor</span>
                </div>
                <div className="flex flex-col">
                    <span className='text-emerald-600 text-[17px] font-bold'>{course.duration}</span>
                    <span className='font-semibold'>Duration</span>
                </div>
                <div className="flex flex-col">
                    <span className='text-emerald-600 text-[17px] font-bold'>{course.level}</span>
                    <span className='font-semibold'>Level</span>
                </div>
            </div>
            <p className='text-[rgb(133,128,128)] mt-6'>{course.brief_description}</p>
            <div className="flex justify-between items-end">
                <Link to={`/courses/${course.slug}/`}>
                    <button className='bg-emerald-600 text-white h-11 grid place-items-center text-sm font-semibold px-5 rounded-[7px] mt-6'>Study Now</button>
                </Link>
                <div className='bg-[rgb(226,236,232)] px-5 py-[9px] rounded-[7px] mt-6'>
                    <span className='text-[17px] font-inter font-semibold border-b-[1px] border-gray-500'><span className='me-[2px] text-[16.5px]'>$</span>{course.fee}</span>
                </div>
            </div>
        </div>
    );
}

export default Course;
