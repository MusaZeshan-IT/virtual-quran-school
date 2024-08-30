import React from 'react';

const FilterSidebar = ({ toggleSidebar, handleFilterClick, activeFilter, handleOptionSelect, isOptionSelected, filterOptions, handleClearFilters }) => {
    return (
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
    );
}

export default FilterSidebar;
