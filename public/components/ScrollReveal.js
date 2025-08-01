"use client";
import React, { useEffect, useRef, useState } from 'react';

// Enhanced scroll animation hook with more options
export const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return [ref, isVisible];
};

// ScrollReveal component that can wrap any content
export const ScrollReveal = ({ 
  children, 
  animation = 'fadeUp',
  duration = 1000,
  delay = 0,
  staggerChildren = false,
  staggerDelay = 100,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollReveal({
    threshold,
    rootMargin,
    triggerOnce,
    delay
  });

  // Animation classes based on animation type
  const getAnimationClasses = (animationType, visible, childIndex = 0) => {
    const baseClasses = `transition-all ease-out`;
    const childDelay = staggerChildren ? childIndex * staggerDelay : 0;
    const totalDelay = delay + childDelay;
    
    const animations = {
      fadeUp: visible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-16',
      fadeDown: visible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 -translate-y-16',
      fadeLeft: visible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 translate-x-16',
      fadeRight: visible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 -translate-x-16',
      fadeIn: visible 
        ? 'opacity-100' 
        : 'opacity-0',
      slideUp: visible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8',
      slideDown: visible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 -translate-y-8',
      scaleIn: visible 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95',
      rotateIn: visible 
        ? 'opacity-100 rotate-0' 
        : 'opacity-0 rotate-12'
    };

    return `${baseClasses} ${animations[animationType] || animations.fadeUp}`;
  };

  // If staggerChildren is enabled, we need to handle children individually
  if (staggerChildren && React.Children.count(children) > 1) {
    return (
      <div ref={ref} className={className} {...props}>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={getAnimationClasses(animation, isVisible, index)}
            style={{ 
              transitionDuration: `${duration}ms`,
              transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  // Single element or no stagger
  return (
    <div
      ref={ref}
      className={`${getAnimationClasses(animation, isVisible)} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Higher-order component to wrap existing components
export const withScrollReveal = (WrappedComponent, animationOptions = {}) => {
  return function ScrollRevealWrapped(props) {
    return (
      <ScrollReveal {...animationOptions}>
        <WrappedComponent {...props} />
      </ScrollReveal>
    );
  };
};

// Utility function to create staggered list animations
export const StaggeredList = ({ 
  children, 
  animation = 'slideUp',
  staggerDelay = 100,
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div ref={ref} className={className} {...props}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          triggerOnce={true}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ScrollReveal;