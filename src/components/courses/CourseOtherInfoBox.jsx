import React from 'react';

const CourseOtherInfoBox = ({ course }) => {
    return (
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
    );
}

export default CourseOtherInfoBox;
