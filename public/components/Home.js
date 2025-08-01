import React from 'react'
import { useState, useEffect } from 'react';
import { ChevronsDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../assets/gallery';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [resetTimer, setResetTimer] = useState(0); // Timer reset trigger
    const images = [image1, image2, image3, image4, image5, image6, image7, image8];

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [images.length, resetTimer]); // Include resetTimer in dependencies

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
        setResetTimer(prev => prev + 1); // Reset auto-advance timer
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        setResetTimer(prev => prev + 1); // Reset auto-advance timer
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setResetTimer(prev => prev + 1); // Reset auto-advance timer
    };

    const onTouchStart = (e) => {
        setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNextSlide();
        } else if (isRightSwipe) {
            goToPreviousSlide();
        }
    };

    return (
        <section 
            id="home" 
            className="relative h-screen flex items-center justify-center text-white bg-gray-800 overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            
            {/* Slideshow Background */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                        backgroundImage: `url(${image.src})`,
                        animation: index === currentSlide ? 'slowZoom 6.3s ease-in-out infinite' : 'none',
                        transform: index === currentSlide ? 'scale(1)' : 'scale(1.04)'
                    }}
                ></div>
            ))}

            {/* Navigation Buttons */}
            <button
                onClick={goToPreviousSlide}
                className="absolute hidden lg:flex left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-20 bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-10 h-10" />
            </button>
            
            <button
                onClick={goToNextSlide}
                className="absolute hidden lg:flex right-4 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next image"
            >
                <ChevronRight className="w-10 h-10" />
            </button>

            <div className="relative z-20 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight animate-fade-in-down">EnvoRick</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
                    Converting Plastic Waste into Sustainable Construction Bricks for a Low-Carbon Future.
                </p>
                <a href="#problem" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block">
                    Discover Our Mission
                </a>
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                                ? 'bg-green-600 scale-110 shadow-lg' 
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
