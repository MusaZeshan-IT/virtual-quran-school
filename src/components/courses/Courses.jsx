import React, { useEffect, useState } from 'react';
import Course from './Course';
import api from '../../apis/api';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const fetchCourses = () => {
        api.get('/courses/')
            .then(response => {
                console.log(response.data);
                setCourses(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    // Use useEffect to call fetchCourses when the component mounts
    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div className='2xl:px-24 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
            <div className='flex md:flex-row flex-col md:items-end items-center justify-between'>
                <div>
                    <h2 className='font-aladin md:text-start text-center tracking-[1.5px] text-gray-600 mt-3 text-xl'>
                        WE HAVE STARTED ONLINE COURSES
                    </h2>
                    <h3 className='text-6xl md:text-start text-center font-philosopher mt-2 leading-[58px]'>
                        ONLINE CLASSES
                    </h3>
                </div>
                <div className='flex gap-x-4 md:mt-0 mt-6'>
                    <i
                        className={`border-2 cursor-not-allowed opacity-50 border-yellow-600 grid place-items-center rounded-full h-14 w-14 fa-solid fa-chevron-left hover:text-white text-yellow-600`}
                    ></i>
                    <i
                        className={`border-2 cursor-not-allowed opacity-50 border-yellow-600 grid place-items-center rounded-full h-14 w-14 fa-solid fa-chevron-right hover:text-white text-yellow-600`}
                    ></i>
                </div>
            </div>
            <div className={`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:mt-10 mt-14`}>
                {courses.map((course) => (
                    <Course key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}

export default Courses;
