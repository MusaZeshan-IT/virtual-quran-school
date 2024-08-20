import React, { useState, useEffect } from 'react';
import Course from './Course';
import CourseList from '../../helpers/CourseList';

const Courses = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [coursesToShow, setCoursesToShow] = useState(getCoursesToDisplay());

    // Determine the number of courses to display based on screen size
    function getCoursesToDisplay() {
        const width = window.innerWidth;
        if (width >= 1024) return 3; // large screens, e.g., lg:grid-cols-3
        if (width >= 640) return 2; // medium screens, e.g., sm:grid-cols-2
        return 1; // small screens, e.g., grid-cols-1
    }

    // Update coursesToShow on window resize
    useEffect(() => {
        const handleResize = () => {
            setCoursesToShow(getCoursesToDisplay());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to handle the next set of courses
    const handleNextCourse = () => {
        if (startIndex + coursesToShow < CourseList.length) {
            setStartIndex((prevIndex) => prevIndex + coursesToShow);
        }
    };

    // Function to handle the previous set of courses
    const handlePreviousCourse = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - coursesToShow);
        }
    };

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
                        className={`border-2 ${startIndex === 0 ? 'cursor-not-allowed opacity-50' : 'hover:bg-yellow-600 cursor-pointer'
                            } border-yellow-600 grid place-items-center rounded-full h-14 w-14 fa-solid fa-chevron-left hover:text-white text-yellow-600`}
                        onClick={handlePreviousCourse}
                    ></i>
                    <i
                        className={`border-2 ${startIndex + coursesToShow >= CourseList.length ? 'cursor-not-allowed opacity-50' : 'hover:bg-yellow-600 cursor-pointer'
                            } border-yellow-600 grid place-items-center rounded-full h-14 w-14 fa-solid fa-chevron-right hover:text-white text-yellow-600`}
                        onClick={handleNextCourse}
                    ></i>
                </div>
            </div>
            <div className={`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:mt-10 mt-14`}>
                {/* Display the correct courses based on the current startIndex */}
                {CourseList.slice(startIndex, startIndex + coursesToShow).map((course, index) => (
                    <Course
                        key={index}
                        course={course}
                        courseFee={course.courseFee}
                        courseName={course.title}
                        courseDuration={course.duration}
                        courseClassTime={course.timeOfDay}
                        studentsEnrolled={course.enrolled}
                        courseFor={course.for}
                    />
                ))}
            </div>
        </div>
    );
}

export default Courses;
