import Image from "next/image";
import bannerImage from '../../../public/images/banner-image.png';

const HomeBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
            <div className="mx-auto px-8 py-12 md:py-20 flex flex-col md:flex-row justify-evenly items-center gap-2">
                <div className="text-center mb-8 md:mb-0 text-white">
                    <h1 className="text-4xl md:text-6xl mb-4 font-bold">Summer Sale!!!</h1>
                    <p className="text-lg md:text-xl mb-3">Get discounts on delected items.</p>
                    <h3 className="text-3xl md:text-5xl font-bold ">GET 50% OFF</h3>
                </div>

                <div className="w-full  md:w-1/3">
                    <Image
                        src={ bannerImage}
                        alt="Home Banner Image"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;