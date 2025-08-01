import React from 'react'
import { HardHat, Recycle } from 'lucide-react';
import Image from 'next/image';
import { cc } from '../assets/images';

export default function ProblemSection() {
    return (
        <section id="problem" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">A Dual Crisis</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                    Bangladesh faces two intersecting environmental threats: unsustainable construction practices and a growing plastic waste crisis.
                </p>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="bg-red-100 p-4 rounded-full">
                                <Image src={cc} alt="Carbon Construction" className="w-12 h-auto" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Carbon-Intensive Construction</h3>
                        <p className="text-gray-600">
                            Traditional brick kilns are a major source of pollution, consuming vast amounts of topsoil and releasing significant greenhouse gases, contributing to 1% of national GHG emissions.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-100 p-4 rounded-full">
                                <Recycle className="w-12 h-12 text-blue-500" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Plastic Pollution</h3>
                        <p className="text-gray-600">
                            Over 3,000 tons of plastic waste are generated daily. Much of this is non-recyclable and ends up polluting our land and waterways, creating a long-term environmental hazard.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
