import React from 'react';
import CourseBg from '../../assets/courses/course-bg.jpg';
import { Link } from 'react-router-dom';

const Hero = ({ pageName, pageSecondName }) => {
    return (
        <section className="relative bg-cover bg-center h-96 grid place-items-center" style={{ backgroundImage: `url(${CourseBg})` }}>
            <div>
                <h2 className="xs-custom:text-5xl xs-custom:leading-[48px] text-center xs:text-[38px] xs:leading-[38px] text-[30px] leading-[30px] font-semibold font-poppins tracking-wide text-white">{pageName}</h2>
                <div className='text-white xs-custom:text-base xs:text-[15px] text-[14px] font-semibold tracking-wide font-poppins flex justify-center xs-custom:mt-6 xs:mt-5 mt-4'>
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                    <span className='mx-3'>-</span>
                    <span>{pageSecondName}</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
