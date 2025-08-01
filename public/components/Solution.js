import React, { useState, useEffect } from 'react'
import ScrollReveal from '@/public/components/ScrollReveal';
import Image from 'next/image';
import { image1, mixing, image5 } from '../assets/gallery';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SolutionSection(){
  const images = [image5, mixing, image1];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [resetTimer, setResetTimer] = useState(0); // Timer reset trigger

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev < images.length - 1) {
          return prev + 1;
        }
        return 0; // Reset to first image when reaching the end
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, resetTimer]); // Include resetTimer in dependencies

  const nextSlide = () => {
    if (isAnimating || currentSlide >= images.length - 1) return; // Stop at last image
    setIsAnimating(true);
    setCurrentSlide((prev) => prev + 1);
    setResetTimer(prev => prev + 1); // Reset auto-advance timer
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || currentSlide <= 0) return; // Stop at first image
    setIsAnimating(true);
    setCurrentSlide((prev) => prev - 1);
    setResetTimer(prev => prev + 1); // Reset auto-advance timer
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setResetTimer(prev => prev + 1); // Reset auto-advance timer
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Touch/swipe functionality
  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    e.target.setAttribute('data-touch-start', touchStartX);
  };

  const handleTouchEnd = (e) => {
    const touchStartX = parseFloat(e.target.getAttribute('data-touch-start'));
    const touchEndX = e.changedTouches[0].clientX;
    const touchDiff = touchStartX - touchEndX;

    // Minimum swipe distance to trigger slide change
    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0) {
        // Swipe left - next slide (only if not at last image)
        if (currentSlide < images.length - 1) {
          nextSlide();
        }
      } else {
        // Swipe right - previous slide (only if not at first image)
        if (currentSlide > 0) {
          prevSlide();
        }
      }
    }
  };

  return (
    <ScrollReveal animation="fadeUp">
      <section id="solution" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Green Innovation: EnvoRick</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                EnvoRick provides a climate-smart solution by transforming non-recyclable plastic waste into a superior building material, promoting a circular economy.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <ScrollReveal animation="fadeUp" className='flex justify-center w-full 2xl:w-1/2'>
              <div className="lg:w-full relative">
                {/* Slideshow Container */}
                <div className="relative flex justify-center w-full h-auto overflow-hidden rounded-lg shadow-lg">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    {images.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <Image 
                          src={image} 
                          alt={`EnvoRick Solution ${index + 1}`} 
                          className="w-full h-auto object-cover" 
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-lg transition-all duration-200 ${
                      currentSlide === 0 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-white/80 hover:bg-white text-gray-800 hover:scale-110'
                    }`}
                    disabled={isAnimating || currentSlide === 0}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-lg transition-all duration-200 ${
                      currentSlide === images.length - 1 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-white/80 hover:bg-white text-gray-800 hover:scale-110'
                    }`}
                    disabled={isAnimating || currentSlide === images.length - 1}
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentSlide
                            ? 'bg-green-600 scale-125'
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                        disabled={isAnimating}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeUp">
              <div className="lg:w-full">
                <h3 className="text-3xl font-semibold mb-6 text-gray-700">The Fabrication Process</h3>
                <ul className="space-y-6">
                  <ScrollReveal animation="fadeUp">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4 mt-1">
                        <span className="text-green-600 font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">Material Collection</h4>
                        <p className="text-gray-600">Shredded non-recyclable plastic, local sand, and performance-enhancing additives are gathered.</p>
                      </div>
                    </li>
                  </ScrollReveal>
                  <ScrollReveal animation="fadeUp">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4 mt-1">
                        <span className="text-green-600 font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">Mixing & Molding</h4>
                        <p className="text-gray-600">Materials are precisely mixed and poured into standard brick molds.</p>
                      </div>
                    </li>
                  </ScrollReveal>
                  <ScrollReveal animation="fadeUp">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4 mt-1">
                        <span className="text-green-600 font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">Curing without Fire</h4>
                        <p className="text-gray-600">Bricks are compressed and cured at room temperature, completely eliminating the need for high-emission kilns.</p>
                      </div>
                    </li>
                  </ScrollReveal>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
