import React, { useState } from 'react';
import CourseList from '../helpers/CourseList';
import CourseBg from '../assets/courses/course-bg.jpg';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { courseUrlName } = useParams();
    const course = CourseList.find((course) => course.urlName === courseUrlName);

    const [activeTab, setActiveTab] = useState('info');

    console.log(activeTab);

    const getCategories = (course) => {
        return course && course.categories && course.categories.length > 0
            ? course.categories.join(', ')
            : 'No categories available';
    };

    const objectivesArray = Object.values(course.objectives);

    if (!course) {
        return <p>Course not found</p>; // Handle case when course is not found
    }

    return (
        <div>
            <section className="relative bg-cover bg-center h-96 grid place-items-center" style={{ backgroundImage: `url(${CourseBg})` }}>
                <div>
                    <h2 className="text-5xl font-semibold font-poppins tracking-wide text-white">{course.title}</h2>
                    <div className='text-white font-semibold tracking-wide font-poppins flex justify-center mt-6'>
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                        <span className='mx-3'>-</span>
                        <span>{course.title}</span>
                    </div>
                </div>
            </section>
            <div className='my-28 2xl:px-36 xl-custom:px-32 xl:px-28 lg-custom:px-24 lg:px-20 md-custom:px-16 px-8'>
                <div className="flex gap-x-16 justify-between">
                    <div className='w-[70%] font-poppins'>
                        <h1 className='text-5xl mt-10 font-semibold'>{course.title}</h1>
                        <div className='flex gap-x-4 items-center mt-4 border-b-2 pb-7'>
                            <div className="rounded-full w-10 h-10 bg-emerald-700 flex items-center justify-center">
                                <span className="text-lg text-white">A</span>
                            </div>
                            <p className='font-medium text-gray-800'><span className='text-gray-500'>By</span> admin</p>
                            <p className='font-medium text-gray-800'><span className='text-gray-500'>Categories:</span> {getCategories(course)}</p>
                        </div>
                        <p className='mt-7 w-[95%] leading-[27px] text-[16.5px] text-gray-500'>{course.fullDesc}</p>
                        <div className='bg-[rgb(248,242,242)] p-2 rounded-md flex gap-x-3 mt-9'>
                            <button
                                className={`py-3 font-semibold tracking-wide rounded-md px-7 text-xl ${activeTab === 'info' ? 'bg-[rgb(255,208,80)]' : 'bg-white'}`}
                                type="button"
                                onClick={() => {
                                    setActiveTab('info')
                                    console.log(activeTab);
                                }}
                            >
                                Course Info
                            </button>
                            <button
                                className={`py-3 font-semibold tracking-wide rounded-md px-7 text-xl ${activeTab === 'reviews' ? 'bg-[rgb(255,208,80)]' : 'bg-white'}`}
                                type="button"
                                onClick={() => setActiveTab('reviews')}
                            >
                                Reviews
                            </button>
                        </div>
                        <h3 className='text-[26px] font-poppins mt-7 font-semibold'>About Course</h3>
                        <p className='mt-3 w-[95%] leading-[27px] text-[16.5px] text-gray-500'>{course.about}</p>
                        <h3 className='text-[26px] font-poppins mt-7 font-semibold'>What Will You Learn?</h3>
                        <div className='grid grid-cols-2 gap-y-4 gap-x-4 mt-5'>
                            {objectivesArray.map((objective, index) => (
                                <div key={index} className='flex items-center gap-x-4'>
                                    <i className='fa-solid text-[28px] fa-square-check text-[rgb(56,55,55)]'></i>
                                    <p className='text-[17px] text-gray-500'>{objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-[30%]'>
                        <div className="bg-[rgb(249,247,241)] border-t border-x p-9 rounded-t-md border-b border-gray-300">
                            <p className='text-2xl font-bold font-poppins'>{course.courseFee}$</p>
                            <button className='bg-emerald-600 mt-7 text-white font-poppins font-semibold text-sm w-full py-3 rounded-md'>Add To Cart</button>
                        </div>
                        <div className="bg-white flex flex-col gap-y-3 border-b border-x px-9 py-7 rounded-b-md border-gray-300 font-poppins">
                            <div className='flex gap-x-3 items-center'>
                                <i className='fa-solid text-gray-600 fa-signal fa-flip-horizontal'></i>
                                <p>{course.level}</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <i className='fa-solid text-gray-600 fa-graduation-cap'></i>
                                <p>{course.enrolled} Total Enrolled</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <i className='fa-regular text-gray-600 fa-calendar-days'></i>
                                <p>{course.duration} Duration</p>
                            </div>
                        </div>

                        <div className="bg-[rgb(249,247,241)] border border-gray-300 rounded-md mt-10 font-poppins">
                            <div className='border-b border-gray-200 pb-8 pt-6 px-7'>
                                <h3 className="text-[21px] font-black text-black mb-4">A course by</h3>
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <div className="rounded-full w-10 h-10 bg-emerald-700 flex items-center justify-center">
                                            <span className="text-lg text-white">A</span>
                                        </div>
                                    </div>
                                    <a className="text-lg font-bold text-black" href="https://themazine.com/newwp/alquran/profile/admin?view=instructor">
                                        admin
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 px-7 pb-6">
                                <h3 className="text-xl font-bold tracking-[0.1px] text-black mb-4">Material Includes</h3>
                                <ul className="space-y-3 text-black">
                                    {course.materials && course.materials.map((material, index) => (
                                        <li key={index} className="flex">
                                            <span className="mr-2 text-gray-500"><i className="fa-solid text-[7px] fa-circle"></i></span>
                                            <span className='text-gray-500'>{material}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-5 px-7 pb-6">
                                <h3 className="text-xl font-bold tracking-[0.1px] text-black mb-4">Requirements</h3>
                                <ul className="space-y-3 text-black">
                                    {course.requirements && course.requirements.map((requirement, index) => (
                                        <li key={index} className="flex">
                                            <span className="mr-2 text-gray-500"><i className="fa-solid text-[7px] fa-circle"></i></span>
                                            <span className="text-gray-500">{requirement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-5 px-7 pb-6">
                                <h3 className="text-xl font-bold tracking-[0.1px] text-black mb-7">Tags</h3>
                                <ul className="flex flex-wrap gap-x-4 gap-y-8">
                                    {course.tags && course.tags.map((tag, index) => (
                                        <li key={index}>
                                            <a className="text-gray-900 font-semibold tracking-wide border border-gray-200 px-5 py-2 rounded-md" href={`/course-tag/${tag}`}>
                                                {tag}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-5 px-7 pb-6">
                                <h3 className="text-xl font-bold tracking-[0.1px] text-black mb-4">Audience</h3>
                                <ul className="space-y-3 text-black">
                                    {course.audience && course.audience.map((audience, index) => (
                                        <li key={index} className="flex">
                                            <span className="mr-2 text-gray-500"><i className="fa-solid text-[7px] fa-circle"></i></span>
                                            <span className="text-gray-500">{audience}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;
