import React from 'react';
import ScrollReveal from '@/public/components/ScrollReveal';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function TimelineSection() {
  const phases = [
    { name: "Research & Design", status: "Completed" },
    { name: "Material Collection", status: "Completed" },
    { name: "Bricks Fabrication", status: "Completed" },
    { name: "Performance Testing", status: "In Progress" },
    { name: "Paper Publish & Certifications", status: "Planned" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-500";
      case "In Progress": return "bg-yellow-500";
      case "Planned": return "bg-blue-500";
      case "Upcoming": return "bg-gray-400";
      default: return "bg-gray-300";
    }
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Timeline</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our journey from concept to commercialization.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="relative">
          {/* Desktop Timeline line */}
          <ScrollReveal animation="fadeUp">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2"></div>
          </ScrollReveal>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            {phases.map((phase, index) => (
              <ScrollReveal 
                key={index}
                animation="fadeUp"
              >
                <div className="relative flex-1 flex flex-col items-center text-center">
                  {/* Dot */}
                  <div className={`w-6 h-6 rounded-full ${getStatusColor(phase.status)} z-10 border-4 border-gray-50`}></div>
                  {/* Content */}
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-800">{phase.name}</h3>
                    <span className={`text-sm font-medium px-2 py-0.5 rounded-full text-white ${getStatusColor(phase.status)}`}>{phase.status}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile Snake Timeline */}
          <div className="block md:hidden">
            {/* Row 1: Items 0 and 1 (left to right) */}
            <div className="relative flex justify-between mb-10 px-5">
              {phases.slice(0, 2).map((phase, index) => (
                <ScrollReveal 
                  key={index}
                  animation="fadeUp"
                >
                  <div className="flex flex-col items-center text-center w-32">
                    <div className={`w-6 h-6 rounded-full ${getStatusColor(phase.status)} z-10 border-4 border-gray-50`}></div>
                    <div className="mt-4">
                      <h3 className="font-semibold text-gray-800 text-sm">{phase.name}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full text-white ${getStatusColor(phase.status)}`}>{phase.status}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Row 2: Items 2 and 3 (right to left) */}
            <div className="relative flex justify-between flex-row-reverse mb-10 px-5">
              {phases.slice(2, 4).reverse().map((phase, index) => (
                <ScrollReveal 
                  key={index + 2}
                  animation="fadeUp"
                >
                  <div className="flex flex-col items-center text-center w-32">
                    <div className={`w-6 h-6 rounded-full ${getStatusColor(phase.status)} z-10 border-4 border-gray-50`}></div>
                    <div className="mt-4">
                      <h3 className="font-semibold text-gray-800 text-sm">{phase.name}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full text-white ${getStatusColor(phase.status)}`}>{phase.status}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Row 3: Item 4 (left side) */}
            <div className="flex justify-start px-5">
              <ScrollReveal animation="fadeUp">
                <div className="flex flex-col items-center text-center w-32">
                  <div className={`w-6 h-6 rounded-full ${getStatusColor(phases[4].status)} z-10 border-4 border-gray-50`}></div>
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-800 text-sm">{phases[4].name}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full text-white ${getStatusColor(phases[4].status)}`}>{phases[4].status}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
