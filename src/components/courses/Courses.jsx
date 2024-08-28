import React, { useEffect, useState } from 'react';
import Course from './Course';
import api from '../../apis/api';
import Spinner from '../Spinner';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [index, setIndex] = useState(0);
    const [coursesPerRow, setCoursesPerRow] = useState(3); // Default to 3 courses per row

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

    useEffect(() => {
        fetchCourses();
    }, []);

    // Function to update the number of courses per row based on screen size
    const updateCoursesPerRow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) { // sm breakpoint in Tailwind (below 640px)
            setCoursesPerRow(1);
        } else if (screenWidth < 1024) { // lg breakpoint in Tailwind (below 1024px)
            setCoursesPerRow(2);
        } else {
            setCoursesPerRow(3);
        }
    };

    useEffect(() => {
        // Update courses per row when the component mounts
        updateCoursesPerRow();
        // Add an event listener to update courses per row on window resize
        window.addEventListener('resize', updateCoursesPerRow);
        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateCoursesPerRow);
        };
    }, []);

    const handleNext = () => {
        if (index + coursesPerRow < courses.length) {
            setIndex(index + 1);
        }
    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const visibleCourses = courses.slice(index, index + coursesPerRow);

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
                    {/* Previous Button */}
                    <i
                        onClick={handlePrevious}
                        className={`border-2 ${index === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} border-yellow-600 grid place-items-center rounded-full h-14 w-14 fa-solid fa-chevron-left hover:bg-yellow-600 hover:text-white text-yellow-600`}
                    ></i>
                    {/* Next Button */}
                    <i
                        onClick={handleNext}
                        className={`border-2 ${index + coursesPerRow >= courses.length ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} border-yellow-600 grid place-items-center rounded-full h-14 w-14 fa-solid fa-chevron-right hover:bg-yellow-600 hover:text-white text-yellow-600`}
                    ></i>
                </div>
            </div>
            {/* Courses Container */}
            <div className={`grid lg:grid-cols-${coursesPerRow} sm:grid-cols-${coursesPerRow === 3 ? 2 : coursesPerRow} grid-cols-1 gap-8 md:mt-10 mt-14 transition-transform duration-500 ease-in-out transform translate-x-${-index * (100 / coursesPerRow)}%`}>
                {visibleCourses.map((course) => (
                    <Course key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}

export default Courses;
