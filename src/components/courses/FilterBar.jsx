import React from 'react';

const FilterBar = ({ activeFilter, filterOptions, handleFilterClick, handleClearFilters, handleOptionSelect, isOptionSelected }) => {
    return (
        <div className='hidden md:flex items-center justify-center gap-x-6 px-8 bg-white shadow-lg rounded-md mx-6 relative z-20'>
            <div className='py-4 flex gap-x-3 items-center border-r border-gray-300 pr-4 cursor-pointer hover:text-[rgb(8,81,63)]' onClick={handleClearFilters}>
                <i className='fa-solid fa-filter-circle-xmark text-lg'></i>
                <span className='text-xl font-semibold'>Clear Filters</span>
            </div>
            <div className='py-4 border-r border-gray-300 pr-4 cursor-pointer relative'>
                <div onClick={() => handleFilterClick('sortBy')} className="hover:text-[rgb(8,81,63)]">
                    <span className='text-xl font-semibold'>Sort by</span>
                    <i className='fa-solid fa-angle-down ml-2'></i>
                </div>
                {activeFilter === 'sortBy' && (
                    <div className='absolute left-0 mt-2 bg-white shadow-lg rounded-md w-[180px] border border-[rgba(0,0,0,0.15)]'>
                        {filterOptions.sortBy.map((option) => (
                            <div key={option} className='flex items-center p-3 cursor-pointer hover:bg-gray-200' onClick={() => handleOptionSelect('sortBy', option)}>
                                <input type='checkbox' className='mr-2' checked={isOptionSelected('sortBy', option)} readOnly />
                                <span>{option}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='py-4 border-r border-gray-300 pr-4 cursor-pointer relative'>
                <div onClick={() => handleFilterClick('level')} className="hover:text-[rgb(8,81,63)]">
                    <span className='text-xl font-semibold'>Level</span>
                    <i className='fa-solid fa-angle-down ml-2'></i>
                </div>
                {activeFilter === 'level' && (
                    <div className='absolute left-0 mt-2 bg-white shadow-lg rounded-md w-[180px] border border-[rgba(0,0,0,0.15)]'>
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
                    <span className='text-xl font-semibold'>Price</span>
                    <i className='fa-solid fa-angle-down ml-2'></i>
                </div>
                {activeFilter === 'price' && (
                    <div className='absolute left-0 mt-2 bg-white shadow-lg rounded-md w-[180px] border border-[rgba(0,0,0,0.15)]'>
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
    );
}

export default FilterBar;
