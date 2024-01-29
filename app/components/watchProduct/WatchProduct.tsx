'use client'
import Button from '../button/Button';

const WatchProduct = () => {
    return (
        <div
            className="w-full h-[480px] md:h-[550px] px-4 md:px-8 lg:px-20 bg-[url('/images/bg-watch.jpg')] mt-16 rounded-lg object-cover bg-center flex sm:flex-col md:flex-row items-center ">
            <div className='flex flex-col gap-10 w-full md:w-1/2'>
                <h3 className='bg-teal-400 text-black py-2 px-7 w-48 rounded text-xl font-semibold'>New Watch</h3>
                <h2 className='text-3xl md:text-5xl font-bold text-white leading-6'>Apple Watch <br />  Series 8</h2>
                <h5 className='text-lg md:text-2xl font-semibold text-white'>Limited Weekly Deals $390.00</h5>
                <Button
                    label='Shop Now'
                    onClick={() => { }}
                    custom='w-52'
                />
            </div>
            <div>

            </div>
        </div>
    );
};

export default WatchProduct;