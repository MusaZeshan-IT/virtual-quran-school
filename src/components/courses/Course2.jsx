import React from 'react';
import { Link } from 'react-router-dom';

const Course2 = ({ course, plan }) => {

    return (
        <div className='rounded-lg px-5 py-6 w-full bg-white shadow-[0px_0px_3px_0.1px_rgb(0,0,0)] font-inter'>
            <div className='flex justify-between flex-wrap gap-2'>
                <h2 className='text-[26px] font-semibold leading-[30px]'>{course.name}</h2>

            </div>
            <div className='border-y mt-4 py-1 border-gray-300 flex items-center gap-x-20'>
                <div className="flex flex-col">
                    <span className='text-emerald-600 text-[17px] font-bold'>{plan.number_of_classes_per_week} per week</span>
                    <span className='font-semibold'>Sessions</span>
                </div>
                <div className="flex flex-col">
                    <span className='text-emerald-600 text-[17px] font-bold'>{course.level}</span>
                    <span className='font-semibold'>Level</span>
                </div>
                <div className="flex flex-col">
                    <span className='text-emerald-600 text-[17px] font-bold'><span className='me-[1px]'>$</span>{course.fee}</span>
                    <span className='font-semibold'>Price</span>
                </div>
            </div>
            <p className='text-[rgb(133,128,128)] mt-6'>{course.brief_description}</p>
            <div className="flex justify-between items-end">
                <Link to={`/courses/${course.slug}/`} state={{ plan }}>
                    <button className='bg-emerald-600 text-white h-11 grid place-items-center text-sm font-semibold px-5 rounded-[7px] mt-6'>Study Now</button>
                </Link>
                <div className="flex flex-col">
                    <div className={`h-[44px] px-4 font-poppins tracking-[0.8px] font-bold text-black grid place-items-center text-sm rounded-[5px] bg-gray-300`}>
                        <span>{plan.name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course2;
