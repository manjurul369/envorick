"use client";
import React, { useState, useEffect } from 'react';
import HeroSection from '@/public/components/Home';
import ProblemSection from '@/public/components/Problem';
import ScrollReveal from '@/public/components/ScrollReveal';
import SolutionSection from '@/public/components/Solution';
import PerformanceSection from '@/public/components/Performance';
import ImpactSection from '@/public/components/Impact';
import TimelineSection from '@/public/components/Timeline';
import UpdatesSection from '@/public/components/Updates';
import ContactSection from '@/public/components/Contact';
import TeamSection from '@/public/components/Team';


// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} EnvoRick. All Rights Reserved.</p>
      <p className="text-sm mt-2">A Climate-Smart Initiative for a Circular Economy.</p>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  return (
    <div className="bg-white font-sans">
      <main>
        <HeroSection />
        <ScrollReveal animation="fadeUp">
          <ProblemSection />
        </ScrollReveal>
        <SolutionSection />
        <PerformanceSection />
        <ImpactSection />
        <ScrollReveal animation="fadeUp">
          <TimelineSection />
        </ScrollReveal>
        <ScrollReveal animation="fadeUp">
          <TeamSection />
        </ScrollReveal>
        <ScrollReveal animation="fadeUp">
          <UpdatesSection />
        </ScrollReveal>
        <ScrollReveal animation="fadeUp">
          <ContactSection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}