import React from 'react';
import ContactForm from '../components/ContactForm';
import Hero from '../components/shared/Hero';

const ContactUs = () => {
    return (
        <div className='flex flex-col gap-y-32 mb-32'>
            {/* Hero Section */}
            <Hero pageName="Contact Us" pageSecondName="Contact" />

            {/* Contact Section */}
            <div className='container mx-auto px-8'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='text-gray-500 font-aladin tracking-wider mt-3 lg:text-2xl sm:text-xl text-lg'>
                        Contact with our Institute
                    </h2>
                    <h3 className='font-philosopher mt-2 lg:text-5xl sm:text-4xl text-3xl text-gray-800'>
                        CONTACT OUR ISLAMIC INSTITUTE
                    </h3>
                    <p className='lg:text-base sm:text-[15px] text-[14px] leading-relaxed font-poppins mt-5 text-gray-700 xs:max-w-2xl'>
                        We allow our customers and users to contact us via email or phone. Any questions or concerns can
                        easily be directed to us. Feel free to contact us.
                    </p>
                </div>
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactUs;
