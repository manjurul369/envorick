import React from 'react'
import ScrollReveal from '@/public/components/ScrollReveal';
import Image from 'next/image';
import { bijoy, afrin, pushpo, josho, kallol, manjurul } from '../assets/team';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "MD Manjurul Islam",
      image: manjurul
    },
    {
      id: 2,
      name: "Kallol Kumar Roy",
      image: kallol
    },
    {
      id: 3,
      name: "Shourav Mondal",
      image: josho
    },
    {
      id: 4,
      name: "Bijoy Chandra Das",
      image: bijoy
    },
    {
      id: 5,
      name: "Suraiya Akter Afrin",
      image: afrin
    },
    {
      id: 6,
      name: "Afia Afrin Pushpo",
      image: pushpo
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals driving EnvoRick's mission to transform waste into sustainable building materials.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal 
              key={member.id}
              animation="fadeUp"
            >
              <div className="text-center w-32 sm:w-36 md:w-40">
                <div className="relative mb-4 overflow-hidden rounded-full mx-auto w-32 h-32 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {member.name}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
