import React, { useEffect, useState } from "react";
import brandInfo from '../../src/config/brand-info.json'

interface CarouselProps {}

const images = brandInfo.home.carouselImages;

const Carousel = (props: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  },[])

  return (
    <div className="relative">
      <img src={images[currentIndex].imageUrl} alt={`Slide ${currentIndex}`} className="w-full h-96 object-cover" />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-r"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-l"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Carousel;
