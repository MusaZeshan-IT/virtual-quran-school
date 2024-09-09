import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../apis/api';
import NotFoundPage from '../NotFoundPage';
import Spinner from '../../components/Spinner';
import Hero from '../../components/shared/Hero';

const CourseDetails = () => {
    const { courseUrlName } = useParams();
    const [course, setCourse] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [activeTab, setActiveTab] = useState('info');

    const navigate = useNavigate();

    useEffect(() => {
        let timeoutId;

        api.get(`/courses/${courseUrlName}/`)
            .then(response => {
                setCourse(response.data);
            })
            .catch(error => {
                console.error('Error fetching course details:', error);
                timeoutId = setTimeout(() => {
                    setNotFound(true);
                }, 4000); // 4 seconds delay before showing the 404 page
            });

        return () => {
            clearTimeout(timeoutId); // Cleanup timeout if the component unmounts or the API call succeeds
        };
    }, [courseUrlName]);


    const getCategories = (course) => {
        return course && course.categories && course.categories.length > 0
            ? course.categories.map(category => category).join(', ')
            : 'No categories available';
    };

    const getClassDays = (course) => {
        return course && course.class_days && course.class_days.length > 0
            ? course.class_days.map(category => category).join(', ')
            : 'No classdays available';
    };

    if (notFound) {
        return <NotFoundPage />;
    }

    if (!course) {
        return (
            <Spinner message={"Loading course details..."} />
        )
    }

    const handlePurchase = () => {
        setIsModalOpen(true); // Show the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Hide the modal
    };

    return (
        <div>
            <Hero pageName={course.name} pageSecondName="Course Details" />
            <div className='my-28 2xl:px-36 xl-custom:px-32 xl:px-28 lg-custom:px-24 lg:px-20 md-custom:px-16 px-8'>
                <div className="flex lg:flex-row flex-col gap-16 justify-between">
                    <div className='lg:w-[70%] font-poppins'>
                        <h1 className='sm:text-5xl xs-custom:text-[40px] text-[32px] leading-tight mt-10 font-semibold'>{course.name}</h1>
                        <div className='flex flex-row gap-x-3 mt-4 border-b-2 pb-7'>
                            <div className='w-10'>
                                <div className="rounded-full w-10 h-10 bg-emerald-700 flex items-center justify-center">
                                    <span className="text-lg text-white">A</span>
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-x-3 gap-y-[2px] items-center'>
                                <p className='font-medium text-gray-700'><span className='text-gray-500'>By</span> admin</p>
                                <p className='font-medium text-gray-700'><span className='text-gray-500'>Categories:</span> {getCategories(course)}</p>
                            </div>
                        </div>
                        <p className='mt-7 w-[95%] leading-[27px] text-[16.5px] text-gray-500'>{course.course_description}</p>
                        <div className='bg-[rgb(248,242,242)] p-2 rounded-md flex gap-x-3 mt-9'>
                            <button
                                className={`2xs-custom:py-3 py-2 font-semibold tracking-wide rounded-md 2xs-custom:px-7 px-5 2xs-custom:text-xl text-lg ${activeTab === 'info' ? 'bg-[rgb(255,208,80)]' : 'bg-white'}`}
                                type="button"
                                onClick={() => setActiveTab('info')}
                            >
                                Course Info
                            </button>
                            <button
                                className={`2xs-custom:py-3 py-2 font-semibold tracking-wide rounded-md 2xs-custom:px-7 px-5 2xs-custom:text-xl text-lg ${activeTab === 'reviews' ? 'bg-[rgb(255,208,80)]' : 'bg-white'}`}
                                type="button"
                                onClick={() => setActiveTab('reviews')}
                            >
                                Reviews
                            </button>
                        </div>
                        {/* About Course and Objectives */}
                        <h3 className='text-[26px] font-poppins mt-10 font-semibold'>About Course</h3>
                        <p className='mt-3 w-[95%] leading-[27px] text-[16.5px] text-gray-500'>{course.additional_description}</p>
                        <h3 className='text-[26px] font-poppins mt-10 font-semibold'>What Will You Learn?</h3>
                        <div className='grid md-custom:grid-cols-2 md-custom:gap-y-4 gap-y-3 md:gap-x-4 mt-5'>
                            {course.objectives.map((objective, index) => (
                                <div key={index} className='flex gap-x-4'>
                                    <i className='fa-solid text-[28px] mt-[3px] fa-square-check text-[rgb(56,55,55)]'></i>
                                    <p className='text-[17px] text-gray-500'>{objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-[30%]'>
                        <div className="bg-[rgb(249,247,241)] border-t border-x p-9 rounded-t-md border-b border-gray-300">
                            <p className='text-2xl font-bold font-poppins'>${course.fee}</p>
                            <Link to={{ pathname: '/checkout' }} state={{ course: course }}>
                                <button
                                    className='bg-emerald-600 hover:bg-[rgb(255,208,80)] hover:text-black mt-7 text-white font-semibold w-full text-[17px] py-3 rounded-md'
                                >
                                    Buy this course
                                </button>
                            </Link>
                        </div>
                        <div className="bg-white flex flex-col gap-y-3 border-b border-x px-9 py-7 rounded-b-md border-gray-300 font-poppins">
                            <div className='flex gap-x-3 items-center'>
                                <i className='fa-solid text-gray-600 fa-signal fa-flip-horizontal'></i>
                                <p>{course.level}</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <i className='fa-solid text-gray-600 fa-graduation-cap'></i>
                                <p>{course.tutor}</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <i class="fa-solid text-gray-600 fa-calendar-week"></i>
                                <p>{course.duration}</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <i className='fa-solid text-gray-600 fa-calendar-days'></i>
                                <p>{getClassDays(course)}</p>
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
                                    {course.material_includes && course.material_includes.map((material, index) => (
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
                                            <a className="text-gray-900 font-semibold tracking-wide border border-gray-300 px-5 py-2 rounded-md bg-[rgb(245,243,243)]" href={`/course-tag/${tag}`}>
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
};

export default CourseDetails;
