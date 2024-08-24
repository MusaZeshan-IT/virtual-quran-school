import React from 'react';
import HomeHero from '../components/HomeHero';
import About from '../components/shared/About';
import Courses from '../components/courses/Courses';
import Features from '../components/Features';
import IslamicPillars from '../components/IslamicPillars';

const HomePage = () => {
    return (
        <div className='flex flex-col gap-y-32 mb-20'>
            <HomeHero />
            <div className='2xl:px-36 xl-custom:px-32 xl:px-28 lg-custom:px-24 lg:px-20 md-custom:px-16 px-8'>
                <About />
            </div>
            <div className=''>
                <Features />
            </div>
            <IslamicPillars />
            <Courses />
        </div>
    );
}

export default HomePage;
