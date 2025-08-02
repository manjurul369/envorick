import React from 'react';
import ScrollReveal from '@/public/components/ScrollReveal';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { postsData } from '../../lib/postsData';

export default function UpdatesSection() {
  const posts = postsData;

  return (
    <section id="updates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Project Updates</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow our journey as we make progress on the ground.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-16">
          {posts.map((post, postIndex) => (
            <ScrollReveal 
              key={post.id}
              animation="fadeUp"
            >
              <Link href={`/updates/${post.id}`}>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-100 cursor-pointer">
                  <ScrollReveal animation="fadeUp">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors">{post.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{post.description.substring(0, 200)}...</p>
                  </ScrollReveal>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {post.images.slice(0, 3).map((img, imgIndex) => (
                      <ScrollReveal 
                        key={imgIndex}
                        animation="fadeUp"
                      >
                        <Image 
                          src={img} 
                          alt={`${post.title} - ${imgIndex + 1}`}
                          className="rounded-lg w-full h-auto object-cover shadow-md" 
                        />
                      </ScrollReveal>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-green-600 font-medium hover:text-green-700 transition-colors">
                    Read more →
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
