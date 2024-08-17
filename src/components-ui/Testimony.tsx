import React, { useEffect, useState } from "react";

type Props = {
  testimonies: string[];
};

const Testimony = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonies = props.testimonies;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  },[testimonies.length])

  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonies.map((testimony, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <p>{testimony}</p>
            <p className="text-yellow-500 text-center">★★★★★</p>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 hover:bg-gray-200 transition duration-300"
      >
        &lt;
      </button> */}

      {/* Right Arrow */}
      {/* <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 hover:bg-gray-200 transition duration-300"
      >
        &gt;
      </button> */}
    </div>
  );
};

export default Testimony;
