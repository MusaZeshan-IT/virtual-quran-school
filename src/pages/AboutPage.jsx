import React from 'react';
import Hero from '../components/shared/Hero';
import About from '../components/shared/About';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage = () => {
    return (
        <div>
            <Hero pageName='About Us' pageSecondName='About' />
            <div className='flex flex-col gap-y-32 my-28 2xl:px-24 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-12 md-custom:px-10 px-8'>
                <About isAboutPage={true} />
                <WhyChooseUs />
            </div>
        </div>
    );
}

export default AboutPage;
