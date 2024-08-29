import React, { useEffect, useState } from 'react';
import Course2 from '../components/courses/Course2';
import api from '../apis/api';
import Hero from '../components/shared/Hero';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

const filterOptions = {
    sortBy: ['Special Courses', 'Courses', 'Top Courses'],
    level: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
    price: ['$50-$60', '$60-$70', '$70-$80'],
};

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [activeFilter, setActiveFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({
        sortBy: '',
        level: '',
        price: '',
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        if (courses.length > 0) {
            getTotalPages();
        }
    }, [courses]);

    const fetchCourses = () => {
        api.get('/courses/')
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const getTotalPages = () => {
        const total = Math.ceil(courses.length / 6);
        setTotalPages(total);
    };

    const handleFilterClick = (filterType) => {
        setActiveFilter(activeFilter === filterType ? '' : filterType);
    };

    const handleOptionSelect = (filterType, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [filterType]: prev[filterType] === option ? '' : option,
        }));
    };

    const handleClearFilters = () => {
        setSelectedOptions({
            sortBy: '',
            level: '',
            price: '',
        });
        setActiveFilter('');
    };

    const isOptionSelected = (filterType, option) => selectedOptions[filterType] === option;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (!courses.length) {
        return <Spinner message="Loading courses..." />;
    }

    const visibleCourses = courses.slice((currentPage - 1) * 6, currentPage * 6);

    return (
        <div className='bg-gradient-to-r from-[rgb(250,247,247)] via-gray-100 to-[rgb(250,247,247)] min-h-screen'>
            <Hero pageName="Our Courses" pageSecondName="Courses" className="mb-12" />
            <div className='py-28 font-inter'>
                {/* Filter Button for Small Screens */}
                <div onClick={toggleSidebar} className='flex md:hidden items-center justify-center gap-x-6 px-8 bg-white shadow-lg rounded-md mx-6 relative z-20'>
                    <div className='py-4 flex gap-x-3 items-center cursor-pointer hover:text-[rgb(8,81,63)]'>
                        <i className='fa-solid fa-filter text-lg'></i>
                        <span className='text-xl font-semibold'>Filter</span>
                    </div>
                </div>

                {/* Filter Sidebar */}
                {isSidebarOpen && (
                    <div className='md:hidden block fixed inset-0 bg-black bg-opacity-50 z-40'>
                        <div className='fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-6'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-2xl font-semibold'>Filters</h3>
                                <button className='text-2xl' onClick={toggleSidebar}>&times;</button>
                            </div>
                            <div className='mt-4'>
                                <div className='py-4 border-b border-gray-300 cursor-pointer relative'>
                                    <div onClick={() => handleFilterClick('sortBy')} className="hover:text-[rgb(8,81,63)]">
                                        <span className='text-lg font-semibold'>Sort by</span>
                                        <i className='fa-solid fa-angle-down ml-2'></i>
                                    </div>
                                    {activeFilter === 'sortBy' && (
                                        <div className='mt-2'>
                                            {filterOptions.sortBy.map((option) => (
                                                <div key={option} className='flex items-center p-3 cursor-pointer hover:bg-gray-200' onClick={() => handleOptionSelect('sortBy', option)}>
                                                    <input type='checkbox' className='mr-2' checked={isOptionSelected('sortBy', option)} readOnly />
                                                    <span>{option}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className='py-4 border-b border-gray-300 cursor-pointer relative'>
                                    <div onClick={() => handleFilterClick('level')} className="hover:text-[rgb(8,81,63)]">
                                        <span className='text-lg font-semibold'>Level</span>
                                        <i className='fa-solid fa-angle-down ml-2'></i>
                                    </div>
                                    {activeFilter === 'level' && (
                                        <div className='mt-2'>
                                            {filterOptions.level.map((option) => (
                                                <div key={option} className='flex items-center p-3 cursor-pointer hover:bg-gray-200' onClick={() => handleOptionSelect('level', option)}>
                                                    <input type='checkbox' className='mr-2' checked={isOptionSelected('level', option)} readOnly />
                                                    <span>{option}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className='py-4 cursor-pointer relative'>
                                    <div onClick={() => handleFilterClick('price')} className="hover:text-[rgb(8,81,63)]">
                                        <span className='text-lg font-semibold'>Price</span>
                                        <i className='fa-solid fa-angle-down ml-2'></i>
                                    </div>
                                    {activeFilter === 'price' && (
                                        <div className='mt-2'>
                                            {filterOptions.price.map((option) => (
                                                <div key={option} className='flex items-center p-3 cursor-pointer hover:bg-gray-200' onClick={() => handleOptionSelect('price', option)}>
                                                    <input type='checkbox' className='mr-2' checked={isOptionSelected('price', option)} readOnly />
                                                    <span>{option}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='mt-6'>
                                <button className='bg-[rgb(8,81,63)] text-white w-full py-2 rounded-md' onClick={handleClearFilters}>Clear Filters</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Filter Section for Medium and Larger Screens */}
                <div className='hidden md:flex items-center justify-center gap-x-6 px-8 bg-white shadow-lg rounded-md mx-6 relative z-20'>
                    <div className='py-4 flex gap-x-3 items-center border-r border-gray-300 pr-4 cursor-pointer hover:text-[rgb(8,81,63)]' onClick={handleClearFilters}>
                        <i className='fa-solid fa-filter-circle-xmark text-lg'></i>
                        <span className='text-xl font-semibold'>Clear Filters</span>
                    </div>
                    <div className='py-4 border-r border-gray-300 pr-4 cursor-pointer relative'>
                        <div onClick={() => handleFilterClick('sortBy')} className="hover:text-[rgb(8,81,63)]">
                            <span className='text-xl font-semibold'>Sort by</span>
                            <i className='fa-solid fa-angle-down ml-2'></i>
                        </div>
                        {activeFilter === 'sortBy' && (
                            <div className='absolute left-0 mt-2 bg-white shadow-lg rounded-md w-full'>
                                {filterOptions.sortBy.map((option) => (
                                    <div key={option} className='flex items-center p-3 cursor-pointer hover:bg-gray-200' onClick={() => handleOptionSelect('sortBy', option)}>
                                        <input type='checkbox' className='mr-2' checked={isOptionSelected('sortBy', option)} readOnly />
                                        <span>{option}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='py-4 border-r border-gray-300 pr-4 cursor-pointer relative'>
                        <div onClick={() => handleFilterClick('level')} className="hover:text-[rgb(8,81,63)]">
                            <span className='text-xl font-semibold'>Level</span>
                            <i className='fa-solid fa-angle-down ml-2'></i>
                        </div>
                        {activeFilter === 'level' && (
                            <div className='absolute left-0 mt-2 bg-white shadow-lg rounded-md w-full'>
                                {filterOptions.level.map((option) => (
                                    <div key={option} className='flex items-center p-3 cursor-pointer hover:bg-gray-200' onClick={() => handleOptionSelect('level', option)}>
                                        <input type='checkbox' className='mr-2' checked={isOptionSelected('level', option)} readOnly />
                                        <span>{option}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='py-4 cursor-pointer relative'>
                        <div onClick={() => handleFilterClick('price')} className="hover:text-[rgb(8,81,63)]">
                            <span className='text-xl font-semibold'>Price</span>
                            <i className='fa-solid fa-angle-down ml-2'></i>
                        </div>
                        {activeFilter === 'price' && (
                            <div className='absolute left-0 mt-2 bg-white shadow-lg rounded-md w-full'>
                                {filterOptions.price.map((option) => (
                                    <div key={option} className='flex items-center p-3 cursor-pointer hover:bg-gray-200' onClick={() => handleOptionSelect('price', option)}>
                                        <input type='checkbox' className='mr-2' checked={isOptionSelected('price', option)} readOnly />
                                        <span>{option}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Course Cards Section */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 mt-10'>
                    {visibleCourses.map((course) => (
                        <Course2 key={course.id} course={course} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </div>
    );
};

export default CoursesPage;
