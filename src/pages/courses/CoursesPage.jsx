import React, { useEffect, useState } from 'react';
import Course2 from '../../components/courses/Course2';
import api from '../../apis/api';
import Hero from '../../components/shared/Hero';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
// import FilterSidebar from '../../components/courses/FilterSidebar';
// import FilterBar from '../../components/courses/FilterBar';

// Define filter options
const filterOptions = {
    sortBy: ['Special Courses', 'Normal Courses', 'Top Courses'],
    level: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
    price: ['$50-$60', '$60-$70', '$70-$80'],
};

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [coursePlans, setCoursePlans] = useState([]);
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

    // Fetch courses and course plans when the component mounts
    useEffect(() => {
        fetchCourses();
        fetchCoursePlans();  // Fetch course plans
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

    // Fetch course plans from the API
    const fetchCoursePlans = () => {
        api.get('/course-plans/')
            .then(response => {
                setCoursePlans(response.data);
            })
            .catch(error => {
                console.error('Error fetching course plans:', error);
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
                {/* Course Cards Section */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6'>
                    {visibleCourses.map((course) => (
                        <div key={course.id}>
                            <Course2 course={course} />

                            {/* Display Course Plans */}
                            <div className='mt-4'>
                                <h3 className="text-lg font-semibold">Available Plans:</h3>
                                <ul className="list-disc ml-6">
                                    {coursePlans
                                        .filter(plan => plan.course === course.id)  // Only show plans for the current course
                                        .map(plan => (
                                            <li key={plan.id}>
                                                {plan.name}: {plan.class_days.join(", ")} ({plan.classes_per_week} classes per week)
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
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
