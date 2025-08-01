import React from 'react'
import { Recycle, Leaf, Users, DollarSign } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ImpactSection() {
  const impacts = [
    { icon: Recycle, title: "Plastic Waste Reduction", text: "Diverts tons of plastic from landfills and oceans, giving it a new purpose.", color: "blue", incocolor: "#5799FF" },
    { icon: Leaf, title: "Carbon Savings", text: "Eliminates fossil fuel use in brick production, significantly cutting CO₂ emissions.", color: "green", incocolor: "#5799FF" },
    { icon: Users, title: "Job Creation", text: "Creates local employment in waste collection, sorting, and brick manufacturing.", color: "purple", incocolor: "#5799FF" },
    { icon: DollarSign, title: "Carbon Credit Potential", text: "Opens new revenue streams through voluntary carbon markets and green financing.", color: "yellow", incocolor: "#FB2C36" },
  ];

  return (
    <ScrollReveal animation="fadeUp">
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Economic & Environmental Impact</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                EnvoRick creates a ripple effect of positive change, benefiting both the planet and the community.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal animation="fadeUp">
                <div className="text-center p-6">
                    <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-blue-100 mb-4">
                    <Recycle className="w-10 h-10 text-[#5799FF]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Plastic Waste Reduction</h3>
                    <p className="text-gray-600">Diverts tons of plastic from landfills and oceans, giving it a new purpose.</p>
                </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp">
                <div className="text-center p-6">
                    <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-green-100 mb-4">
                    <Leaf className="w-10 h-10 text-[#08da01]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Carbon Savings</h3>
                    <p className="text-gray-600">Eliminates fossil fuel use in brick production, significantly cutting CO₂ emissions.</p>
                </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp">
                <div className="text-center p-6">
                    <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-purple-100 mb-4">
                    <Users className="w-10 h-10 text-[#5799FF]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Job Creation</h3>
                    <p className="text-gray-600">Creates local employment in waste collection, sorting, and brick manufacturing.</p>
                </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp">
                <div className="text-center p-6">
                    <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-yellow-100 mb-4">
                    <DollarSign className="w-10 h-10 text-[#ff5861]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Carbon Credit Potential</h3>
                    <p className="text-gray-600">Opens new revenue streams through voluntary carbon markets and green financing.</p>
                </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};
