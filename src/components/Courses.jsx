import React from 'react';
import Course from './Course';

const Courses = () => {
    return (
        <div className='2xl:px-24 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
            <div className='flex items-end justify-between'>
                <div>
                    <h2 className='font-aladin tracking-[1.5px] text-gray-600 mt-3 text-xl'>WE HAVE STARTED ONLINE COURSES</h2>
                    <h3 className='text-6xl font-philosopher mt-2 leading-[58px]'>ONLINE CLASSES</h3>
                </div>
                <div className='flex gap-x-4'>
                    <i className='border-2 hover:bg-yellow-600 border-yellow-600 grid place-items-center rounded-full h-14 w-14 fa-solid fa-chevron-left hover:text-white text-yellow-600'></i>
                    <i className='border-2 hover:bg-yellow-600 border-yellow-600 grid place-items-center rounded-full h-14 w-14 fa-solid fa-chevron-right hover:text-white text-yellow-600'></i>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-8 mt-10'>
                <Course courseFee="3.59" courseName="Persian Language Course" courseDuration="15 days" courseClassTime="7:00 pm" studentsEnrolled="0" courseFor="For Persian language learners, from beginners to advanced." />
                <Course courseFee="3.59" courseName="Islamic Law of Inheritance" courseDuration="17 days" courseClassTime="7:00pm" studentsEnrolled="0" courseFor="For Islamic law students, professionals, and Muslims, beginner to advanced." />
            </div>
        </div>
    );
}

export default Courses;
