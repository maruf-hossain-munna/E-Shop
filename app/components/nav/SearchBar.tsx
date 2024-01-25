import React from 'react';

const SearchBar = () => {
    return (
        <div className=''>
            <input type="search" name="search" id="search" placeholder='Search...' 
                className='py-2 px-5 text-black bg-transparent rounded-full border border-slate-800 focus:border-slate-600'
            />
        </div>
    );
};

export default SearchBar;