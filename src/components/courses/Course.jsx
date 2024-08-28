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
        <div className='rounded-lg px-6 py-4 w-full bg-gray-100 shadow-[0px_0px_3px_0.1px_rgb(0,0,0)] font-inter'>
            <h2 className='text-[26px] font-semibold leading-[30px]'>{course.name}</h2>
            <div className='border-y mt-4 py-1 border-gray-300 flex justify-between'>
                <div className="flex flex-col">
                    <span className='text-amber-600 text-[17px] font-bold'>{course.duration}</span>
                    <span className='font-semibold'>Duration</span>
                </div>
                <div className="flex flex-col">
                    <span className='text-amber-600 text-[17px] font-bold'>{convertTo12HourFormat(course.class_time)}</span>
                    <span className='font-semibold'>Class Time</span>
                </div>
                <div className="flex flex-col">
                    <span className='text-amber-600 text-[17px] font-bold'>{course.enrolled}</span>
                    <span className='font-semibold'>Enroll</span>
                </div>
            </div>
            <p className='text-[rgb(133,128,128)] mt-6'>{course.brief_description}</p>
            <div className="flex justify-between items-end">
                <Link to={`/courses/${course.slug}/`}>
                    <button className='bg-yellow-600 text-white h-11 grid place-items-center text-sm font-semibold px-5 rounded-[7px] mt-6'>Study Now</button>
                </Link>
                <span className='bg-[rgb(252,252,252)] shadow-[0px_0px_1px_1px_rgb(0,0,0)] text-lg font-semibold px-5 py-[10px] rounded-[7px] mt-6'>$ {course.fee}</span>
            </div>
        </div>
    );
}

export default Course;
