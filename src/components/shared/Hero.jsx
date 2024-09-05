import React from 'react';
import CourseBg from '../../assets/courses/course-bg.jpg';
import { Link } from 'react-router-dom';

const HeroShared = ({ pageName, pageSecondName }) => {
    return (
        <section className="px-6 relative bg-cover bg-center h-96 grid place-items-center" style={{ backgroundImage: `url(${CourseBg})` }}>
            <div>
                <h2 className="xs-custom:text-5xl xs-custom:leading-[48px] text-center xs:text-[38px] xs:leading-[38px] text-[30px] leading-[30px] font-semibold font-poppins tracking-wide text-white">{pageName}</h2>
                <div className='text-white xs-custom:text-base xs:text-[15px] text-[14px] font-semibold tracking-wide font-poppins flex justify-center xs-custom:mt-6 xs:mt-5 mt-4'>
                    <p className='text-center'>
                        <Link to="/">Home</Link>
                        <span className='sm:mx-3 mx-2'>-</span>
                        {pageSecondName}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroShared;
