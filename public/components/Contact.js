import React from 'react';
import { Mail, Phone, Facebook, Linkedin } from 'lucide-react';
import ScrollReveal from '@/public/components/ScrollReveal';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <ScrollReveal animation="fadeUp">
                    <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        We are seeking partners, investors, and advocates to help scale our impact. Let's build a greener future together.
                    </p>
                </ScrollReveal>

                <ScrollReveal animation="fadeUp">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                        <div className="flex items-center">
                            <Mail className="w-6 h-6 mr-3 text-green-400" />
                            <a href="mailto:manjurul.ses.bu@gmail.com" className="hover:text-green-400 transition-colors">manjurul.ses.bu@gmail.com</a>
                        </div>
                        <div className="flex items-center">
                            <Phone className="w-6 h-6 mr-3 text-green-400" />
                            <a href="tel:+8801767980780" className="hover:text-green-400 transition-colors">+8801767-980780</a>
                        </div>
                        <div className="flex items-center">
                            <Facebook className="w-6 h-6 mr-3 text-green-400" />
                            <a href="https://facebook.com/envorick" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">Facebook</a>
                        </div>
                        <div className="flex items-center">
                            <Linkedin className="w-6 h-6 mr-3 text-green-400" />
                            <a href="https://linkedin.com/company/envorick" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fadeUp">
                    <button className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-102">
                        Let's Get in Touch
                    </button>
                </ScrollReveal>
            </div>
        </section>
    );
}
