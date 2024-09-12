import React, { useEffect, useState } from 'react';
import Course2 from '../../components/courses/Course2';
import api from '../../apis/api';
import Hero from '../../components/shared/Hero';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import FilterSidebar from '../../components/courses/FilterSidebar';
import FilterBar from '../../components/courses/FilterBar';

// Define filter options
const filterOptions = {
    sortBy: ['Special Courses', 'Normal Courses', 'Top Courses'],
    level: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
    price: ['$50-$60', '$60-$70', '$70-$80'],
};

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [activeFilter, setActiveFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({
        sortBy: '',
        level: '',
        price: '',
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Fetch courses when the component mounts
    useEffect(() => {
        fetchCourses();
    }, []);

    // Apply filters whenever selected options or courses change
    useEffect(() => {
        filterCourses();
    }, [selectedOptions, courses]);

    // Update total pages whenever filtered courses change
    useEffect(() => {
        getTotalPages();
    }, [filteredCourses]);

    // Fetch courses from the API
    const fetchCourses = () => {
        api.get('/courses/')
            .then(response => {
                setCourses(response.data);
                setFilteredCourses(response.data);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    };

    // Apply multiple filters to the courses
    const filterCourses = () => {
        let filtered = [...courses]; // Start with all courses

        // Exclude hidden courses
        filtered = filtered.filter(course => !course.hidden);

        if (selectedOptions.sortBy) {
            const selectedOption = selectedOptions.sortBy.replace(" Courses", "");
            filtered = filtered.filter(course => course.type === selectedOption.toLowerCase());
        }

        if (selectedOptions.level) {
            filtered = filtered.filter(course => course.level === selectedOptions.level);
        }

        if (selectedOptions.price) {
            const selectedPrice = selectedOptions.price.replaceAll("$", "");
            const [minPrice, maxPrice] = selectedPrice.split('-').map(price => Number(price.trim()));
            filtered = filtered.filter(course => course.fee >= minPrice && course.fee <= maxPrice);
        }

        setTotalPages(Math.ceil(filtered.length / 6));
        setFilteredCourses(filtered);
        setCurrentPage(1);
    };

    // Calculate total pages based on filtered courses
    const getTotalPages = () => {
        setTotalPages(Math.ceil(filteredCourses.length / 6));
    };

    // Handle filter selection
    const handleFilterClick = (filterType) => {
        setActiveFilter(activeFilter === filterType ? '' : filterType);
    };

    // Handle option selection for filters
    const handleOptionSelect = (filterType, option) => {
        setSelectedOptions(prev => ({
            ...prev,
            [filterType]: prev[filterType] === option ? '' : option,
        }));
    };

    // Clear all filters
    const handleClearFilters = () => {
        setSelectedOptions({
            sortBy: '',
            level: '',
            price: '',
        });
        setActiveFilter('');
    };

    // Check if an option is selected
    const isOptionSelected = (filterType, option) => selectedOptions[filterType] === option;

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Handle pagination page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Show loading spinner if courses are being fetched
    if (!courses.length) {
        return <Spinner message="Loading courses..." />;
    }

    // Show a custom "no courses found" message
    if (filteredCourses.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] xs:px-6 px-3">
                <h2 className="text-4xl font-black font-poppins text-black mb-4 text-center">No Courses Found</h2>
                <p className="text-lg text-gray-700 font-poppins text-center">Try adjusting your filters to find the course that suits you best.</p>
                <button
                    onClick={handleClearFilters}
                    className="mt-6 px-4 py-2 bg-[rgb(8,81,63)] text-white font-poppins rounded hover:bg-green-800 transition-colors"
                >
                    Clear Filters
                </button>
            </div>
        );
    }

    // Determine which courses to display on the current page
    const visibleCourses = filteredCourses.slice((currentPage - 1) * 6, currentPage * 6);

    return (
        <div className='bg-gradient-to-r from-[rgb(250,247,247)] via-gray-100 to-[rgb(250,247,247)]'>
            <Hero pageName="Our Courses" pageSecondName="Courses" />
            <div className='font-inter py-28'>
                {/* Filter Button for Small Screens */}
                {/* <div onClick={toggleSidebar} className='flex md:hidden items-center justify-center gap-x-6 px-8 bg-white shadow-lg rounded-md mx-6 relative z-20'>
                    <div className='py-4 flex gap-x-3 items-center cursor-pointer hover:text-[rgb(8,81,63)]'>
                        <i className='fa-solid fa-filter text-lg'></i>
                        <span className='text-xl font-semibold'>Filter</span>
                    </div>
                </div> */}

                {/* Filter Sidebar */}
                {/* {isSidebarOpen && (
                    <FilterSidebar
                        toggleSidebar={toggleSidebar}
                        filterOptions={filterOptions}
                        activeFilter={activeFilter}
                        isOptionSelected={isOptionSelected}
                        handleFilterClick={handleFilterClick}
                        handleOptionSelect={handleOptionSelect}
                        handleClearFilters={handleClearFilters}
                    />
                )} */}

                {/* Filter Section for Medium and Larger Screens */}
                {/* <FilterBar
                    filterOptions={filterOptions}
                    activeFilter={activeFilter}
                    isOptionSelected={isOptionSelected}
                    handleFilterClick={handleFilterClick}
                    handleOptionSelect={handleOptionSelect}
                    selectedOptions={selectedOptions}
                    handleClearFilters={handleClearFilters}
                /> */}

                {/* Course Cards Section */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6'>
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
