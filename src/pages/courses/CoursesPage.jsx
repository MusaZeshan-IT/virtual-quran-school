import React, { useEffect, useState } from 'react';
import Course2 from '../../components/courses/Course2';
import api from '../../apis/api';
import Hero from '../../components/shared/Hero';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import FilterSidebar from '../../components/courses/FilterSidebar';
import FilterBar from '../../components/courses/FilterBar';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [filteredPlans, setFilteredPlans] = useState([]); // Now for course plans
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({
        sortBy: '',
        level: '',
        price: '',
    });

    // Fetch courses when the component mounts
    useEffect(() => {
        fetchCourses();
    }, []);

    useEffect(() => {
        filterCourses();
    }, [selectedOptions, courses]);

    useEffect(() => {
        calculateTotalPages();
    }, [filteredPlans]);

    // Fetch courses from the API
    const fetchCourses = () => {
        api.get('/courses/')
            .then(response => {
                setCourses(response.data);
                // Flatten course plans into a single array
                const allPlans = response.data.flatMap(course => course.plans.map(plan => ({ ...plan, course })));
                setFilteredPlans(allPlans);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    };

    // Apply multiple filters to the courses
    const filterCourses = () => {
        let filtered = courses.flatMap(course =>
            course.plans.map(plan => ({ ...plan, course })) // Combine plan data with course info
        );

        if (selectedOptions.sortBy) {
            const selectedOption = selectedOptions.sortBy.replace(" Courses", "");
            filtered = filtered.filter(plan => plan.course.type === selectedOption.toLowerCase());
        }

        if (selectedOptions.level) {
            filtered = filtered.filter(plan => plan.course.level === selectedOptions.level);
        }

        if (selectedOptions.price) {
            const selectedPrice = selectedOptions.price.replaceAll("$", "");
            const [minPrice, maxPrice] = selectedPrice.split('-').map(price => Number(price.trim()));
            filtered = filtered.filter(plan => plan.course.fee >= minPrice && plan.course.fee <= maxPrice);
        }

        setFilteredPlans(filtered);
        setCurrentPage(1);
    };

    const calculateTotalPages = () => {
        setTotalPages(Math.ceil(filteredPlans.length / 6));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (!courses.length) {
        return <Spinner message="Loading courses..." />;
    }

    if (filteredPlans.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] xs:px-6 px-3">
                <h2 className="text-4xl font-black font-poppins text-black mb-4 text-center">No Courses Found</h2>
                <p className="text-lg text-gray-700 font-poppins text-center">Try adjusting your filters to find the course that suits you best.</p>
                <button
                    onClick={() => setSelectedOptions({ sortBy: '', level: '', price: '' })}
                    className="mt-6 px-4 py-2 bg-[rgb(8,81,63)] text-white font-poppins rounded hover:bg-green-800 transition-colors"
                >
                    Clear Filters
                </button>
            </div>
        );
    }

    // Display the correct slice of plans for the current page
    const visiblePlans = filteredPlans.slice((currentPage - 1) * 6, currentPage * 6);

    return (
        <div className='bg-gradient-to-r from-[rgb(250,247,247)] via-gray-100 to-[rgb(250,247,247)]'>
            <Hero pageName="Our Courses" pageSecondName="Courses" />
            <div className='font-inter py-28'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6'>
                    {visiblePlans.map((plan) => (
                        <Course2 key={plan.id} course={plan.course} plan={plan} />
                    ))}
                </div>

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
