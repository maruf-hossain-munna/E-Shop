import React from 'react';

const Skeleton = () => {
    return (
        <div className='py-10 px-4 animate-pulse w-full rounded-lg shadow-lg flex flex-col md:flex-row gap-16 border'>
            <div className='bg-gray-800/10 h-96 rounded w-full md:w-1/2'>

            </div>

            <div className='w-full md:w-1/2 flex flex-col gap-3'>
                <h5 className='h-12 bg-gray-800/10 rounded w-full'></h5>
                <h5 className='h-7 bg-gray-800/10 rounded w-full'></h5>
                <h5 className='h-52 bg-gray-800/10 rounded w-full'></h5>
                <h5 className='h-10 bg-gray-800/10 rounded w-full'></h5>

            </div>
        </div>

    );
};

export default Skeleton;