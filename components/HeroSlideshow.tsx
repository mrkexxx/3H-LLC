import React, { useState, useEffect, useCallback } from 'react';
import { TRANSLATIONS } from '../constants';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface HeroSlideshowProps {
  images: string[];
  content: typeof TRANSLATIONS.vi.hero;
}

export const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ images, content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Slides */}
      {images.map((url, index) => (
         <div
           key={index}
           className="absolute inset-0 bg-cover bg-center w-full h-full"
           style={{ 
             backgroundImage: `url('${url}')`,
             opacity: index === currentIndex ? 1 : 0,
             transform: index === currentIndex ? 'scale(1)' : 'scale(1.05)',
             transitionProperty: 'opacity, transform',
             transitionDuration: '1.5s'
            }}
         ></div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl">{content.title}</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl drop-shadow-lg">{content.subtitle}</p>
          <a href="#fleet" className="bg-amber-500 text-gray-900 font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 hover:bg-amber-400 shadow-lg">
            {content.ctaButton}
          </a>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute z-20 top-1/2 -translate-y-1/2 left-5">
        <button onClick={prevSlide} className="bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition" aria-label="Previous Slide">
            <ChevronLeftIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute z-20 top-1/2 -translate-y-1/2 right-5">
        <button onClick={nextSlide} className="bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition" aria-label="Next Slide">
            <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute z-20 bottom-10 left-0 right-0 flex justify-center gap-2">
        {images.map((_, slideIndex) => (
          <button 
            key={slideIndex} 
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition ${currentIndex === slideIndex ? 'bg-amber-500' : 'bg-white/50'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};
