"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { logo } from '../assets/images';
import Link from 'next/link';

export default function Nav() {
    const [activeLink, setActiveLink] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const sections = ['home', 'problem', 'solution', 'performance', 'impact', 'timeline', 'team', 'updates', 'contact'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px'
            }
        );

        const timer = setTimeout(() => {
            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    observer.observe(section);
                }
            });
        }, 500);


        return () => {
            clearTimeout(timer);
            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const navLinks = [
        { id: 'home', title: 'Home' },
        { id: 'problem', title: 'Problem' },
        { id: 'solution', title: 'Solution' },
        { id: 'performance', title: 'Performance' },
        { id: 'impact', title: 'Impact' },
        { id: 'timeline', title: 'Timeline' },
        { id: 'team', title: 'Team' },
        { id: 'updates', title: 'Updates' },
        { id: 'contact', title: 'Contact' },
    ];

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMobileNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm shadow-md transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:p-6">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image src={logo} alt="EnvoRick Logo" className="mr-3 w-[30px] md:w-[40px] h-auto" />
                    </Link>
                </div>
                <nav className="hidden lg:flex space-x-10">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`text-gray-600 hover:text-green-600 font-medium pb-1 border-b-2 transition-all duration-300 ${activeLink === link.id ? 'border-green-600 text-green-600' : 'border-transparent'}`}
                        >
                            {link.title}
                        </a>
                    ))}
                </nav>
                <button 
                    className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
                    onClick={handleMobileMenuToggle}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden bg-white border-t shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen 
                    ? 'max-h-screen opacity-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 transform -translate-y-4'
            }`}>
                <nav className="container mx-auto py-4">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`block px-6 py-3 text-gray-600 hover:text-green-600 hover:bg-gray-50 font-medium transition-all duration-300 transform ${
                                isMobileMenuOpen 
                                    ? 'translate-y-0 opacity-100' 
                                    : '-translate-y-2 opacity-0'
                            } ${activeLink === link.id ? 'text-green-600 bg-green-50' : ''}`}
                            style={{ 
                                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' 
                            }}
                            onClick={handleMobileNavClick}
                        >
                            {link.title}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
