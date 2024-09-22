import React, { useEffect, useState } from 'react';
import Course from './Course';
import api from '../../apis/api';

const Courses = () => {
    const [coursesWithPlans, setCoursesWithPlans] = useState([]);
    const [index, setIndex] = useState(0);
    const [coursesPerRow, setCoursesPerRow] = useState(3); // Default to 3 courses per row

    const fetchCourses = () => {
        api.get('/courses/')
            .then(response => {
                // Flatten the courses and plans into one array
                const allCoursesWithPlans = response.data.flatMap(course =>
                    course.plans.map(plan => ({ course, plan }))
                );
                setCoursesWithPlans(allCoursesWithPlans);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const updateCoursesPerRow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            setCoursesPerRow(1);
        } else if (screenWidth < 1024) {
            setCoursesPerRow(2);
        } else {
            setCoursesPerRow(3);
        }
    };

    useEffect(() => {
        updateCoursesPerRow();
        window.addEventListener('resize', updateCoursesPerRow);
        return () => {
            window.removeEventListener('resize', updateCoursesPerRow);
        };
    }, []);

    const filteredCourses = coursesWithPlans.filter(({ course }) => !course.hidden);

    const handleNext = () => {
        if (index + coursesPerRow < filteredCourses.length) {
            setIndex(index + 1);
        }
    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const coursesToDisplay = filteredCourses.slice(index, index + coursesPerRow);

    return (
        <div className='2xl:px-12 xl-custom:px-10 xl:px-8 px-6'>
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
                        onClick={handlePrevious}
                        className={`border-2 ${index === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} border-yellow-600 grid place-items-center rounded-full h-14 w-14 fa-solid fa-chevron-left hover:bg-yellow-600 hover:text-white text-yellow-600`}
                    ></i>
                    <i
                        onClick={handleNext}
                        className={`border-2 ${index + coursesPerRow >= filteredCourses.length ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} border-yellow-600 grid place-items-center rounded-full h-14 w-14 fa-solid fa-chevron-right hover:bg-yellow-600 hover:text-white text-yellow-600`}
                    ></i>
                </div>
            </div>
            {/* Courses Container */}
            <div className={`grid lg:grid-cols-${coursesPerRow} sm:grid-cols-${coursesPerRow === 3 ? 2 : coursesPerRow} grid-cols-1 gap-5 md:mt-10 mt-14`}>
                {coursesToDisplay.map(({ course, plan }) => (
                    <Course key={`${course.id}-${plan.id}`} course={course} plan={plan} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
