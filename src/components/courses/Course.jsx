import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course, plan, isCoursesPage = false }) => {
    return (
        <div className='rounded-lg px-4 py-6 w-full bg-white shadow-[0px_0px_3px_0.1px_rgb(0,0,0)] font-inter'>
            <div className='flex justify-between flex-wrap gap-2'>
                <h2 className='text-[26px] font-semibold leading-[30px]'>{course.name}</h2>
            </div>
            <div className='border-y mt-4 py-1 border-gray-300 flex items-center justify-between'>
                <div className="flex flex-col">
                    <span className='font-semibold'>Sessions</span>
                    <span className={`${isCoursesPage ? 'text-emerald-600' : 'text-amber-600'} text-[17px] font-bold`}>
                        {plan.number_of_classes_per_week}x<span className='mx-[2px]'>/</span>week
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className='font-semibold'>
                        Fee<span className='mx-[2px]'>/</span>Month
                    </span>
                    <span className={`${isCoursesPage ? 'text-emerald-600' : 'text-amber-600'} text-[17px] font-bold`}>
                        <span className='me-[1px]'>$</span>
                        {plan.fee}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className='font-semibold'>Duration</span>
                    <span className={`${isCoursesPage ? 'text-emerald-600' : 'text-amber-600'} text-[17px] font-bold`}>
                        {course.class_duration}
                    </span>
                </div>
            </div>
            <p className='text-[rgb(133,128,128)] mt-4'>{course.brief_description}</p>
            <div className="flex justify-between items-end mt-8">
                <Link to={`/courses/${course.slug}/`} state={{ plan }}>
                    <button className={`${isCoursesPage ? 'bg-emerald-600' : 'bg-amber-600'} text-white h-11 grid place-items-center text-sm font-semibold px-5 rounded-[5px]`}>
                        Study Now
                    </button>
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

export default Course;
