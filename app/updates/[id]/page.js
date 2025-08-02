"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { postsData } from '../../../lib/postsData';

export default function PostPage() {
  const params = useParams();
  const postId = params.id;

  // Gallery slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);

  // Post data (in a real app, this would come from a database or API)
  const posts = postsData;

  const post = posts.find(p => p.id === postId);

  // Auto-advance gallery slideshow every 6 seconds
  useEffect(() => {
    if (!post || post.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % post.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [post?.images?.length, resetTimer]);

  // Gallery navigation functions
  const nextSlide = () => {
    if (isAnimating || !post) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % post.images.length);
    setResetTimer(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || !post) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + post.images.length) % post.images.length);
    setResetTimer(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide || !post) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setResetTimer(prev => prev + 1);
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
        nextSlide(); // Swipe left - next slide
      } else {
        prevSlide(); // Swipe right - previous slide
      }
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h1>
          <Link href="/" className="text-green-600 hover:text-green-700">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-50 p-4">
        <div className="container mx-auto">
          <Link 
            href="/#updates" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Updates
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500 mb-8">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="text-lg">{post.date}</span>
          </div>
        </header>

        {/* Large Gallery Slider */}
        <div className="mb-12">
          <div className={`${post.id === "4" ? "h-[500px]" : "h-[200px]"} relative w-full lg:h-[600px] overflow-hidden rounded-xl shadow-2xl`}>
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {post.images.map((image, index) => (
                <div key={index} className="w-full flex justify-center flex-shrink-0 h-full">
                  <Image 
                    src={image} 
                    alt={`${post.title} - Image ${index + 1}`} 
                    className={`${post.id === "4" ? "w-auto" : "w-full"} h-full object-cover`}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute hidden lg:block left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 hover:scale-110 transition-all duration-200 shadow-lg"
              disabled={isAnimating}
            >
              <ChevronLeft size={28} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute hidden lg:block right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 hover:scale-110 transition-all duration-200 shadow-lg"
              disabled={isAnimating}
            >
              <ChevronRight size={28} />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {post.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 lg:w-4 h-2 lg:h-4 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-green-600 scale-110 shadow-lg'
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  disabled={isAnimating}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentSlide + 1} / {post.images.length}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">{post.description}</p>
        </div>

        {/* Featured Images - Remove this section as we now have the large gallery */}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.map((section, index) => {
            switch (section.type) {
              case 'heading':
                return (
                  <h2 key={index} className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                    {section.text}
                  </h2>
                );
              case 'paragraph':
                return (
                  <p key={index} className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {section.text}
                  </p>
                );
              case 'list':
                return (
                  <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 text-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Back to Updates */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            href="/#updates" 
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Updates
          </Link>
        </div>
      </article>
    </div>
  );
}
