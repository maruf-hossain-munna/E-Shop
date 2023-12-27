// components/Carousel.tsx
import Image from 'next/image';
import { useState } from 'react';

interface CarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        console.log('Next button done');
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative">
            <div className="overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full">
                            <Image
                                src={image}
                                alt={`Slide`}
                                className="w-full h-full object-contain"
                                // fill
                                width={250}
                                height={100}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2" onClick={prevSlide}>
                Previous
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={nextSlide}>
                Next
            </button>
        </div>
    );
};

export default ImageCarousel;
