import React, { useState, useRef, useEffect } from 'react';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';

const Slide = ({ slide }) => {
  const { src, title } = slide;
  return (
    <div className="flex-none w-full flex justify-center items-center text-center relative h-4/6">
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out" 
      />
      <h2 className="absolute bottom-4 text-xs md:text-sm lg:text-lg font-bold text-white bg-black bg-opacity-50 p-2 rounded-md">
        {title}
      </h2>
    </div>
  );
};

const CarouselControl = ({ direction, onClick }) => (
  <button
    className={`absolute top-1/2 transform -translate-y-1/2 text-xl text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-70 duration-300 ${direction === 'left' ? 'left-4' : 'right-4'}`}
    onClick={onClick}
  >
    {direction === 'left' ? <IconArrowNarrowLeft /> : <IconArrowNarrowRight />}
  </button>
);

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef();

  const moveToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const moveToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const handleResize = () => {
      slidesRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <div className="relative w-0.5 h-0.5 mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
        ref={slidesRef}
      >
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} />
        ))}
      </div>
      <CarouselControl direction="left" onClick={moveToPreviousSlide} />
      <CarouselControl direction="right" onClick={moveToNextSlide} />
    </div>
  );
};

export default Carousel;
