"use client";
import {React, useState, useEffect, useRef} from 'react';
import ScrollReveal from './ScrollReveal';


const AnimatedNumber = ({ value, unit }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const numberRef = useRef(null);

  // Intersection Observer to detect when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: '-50px' // Start animation slightly after the element enters viewport
      }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, [isVisible]);

  // Animate numbers only when visible
  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 2000;
    const steps = 50;
    const stepValue = value / steps;
    const stepDuration = animationDuration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep > steps) {
        clearInterval(timer);
        setCurrentValue(value);
      } else {
        setCurrentValue(prev => Math.min(prev + stepValue, value));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span ref={numberRef}>
      {currentValue.toFixed(unit.includes('%') || unit.includes('kg') ? 1 : 0)}{unit}
    </span>
  );
};

export default function PerformanceSection() {
  const stats = [
    { label: "Compressive Strength", value: 35, unit: " MPa", description: "Exceeding traditional brick standards for superior durability." },
    { label: "Water Absorption", value: 0.5, unit: "%", description: "Highly water-resistant, protecting structures from moisture damage." },
    { label: "Emission Reduction", value: 0.7, unit: " kg CO₂", description: "Saved per brick, thanks to our kiln-free production method." },
    { label: "Density", value: 1600, unit: " kg/m³", description: "Lightweight yet strong, reducing structural load and transport costs." },
  ];

  return (
    <ScrollReveal animation="fadeUp">
      <section id="performance" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Expected Performance</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Based on extensive research, EnvoRick bricks are engineered to outperform conventional bricks in key areas.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal 
                key={index}
                animation="fadeUp"
              >
                <div className="bg-white h-auto md:h-[300px] 2xl:h-[250px] flex flex-col justify-center p-8 text-center rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <p className="text-5xl font-bold text-green-600 mb-2">
                    <AnimatedNumber value={stat.value} unit={stat.unit} />
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{stat.label}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};