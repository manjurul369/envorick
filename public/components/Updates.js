import React from 'react';
import ScrollReveal from '@/public/components/ScrollReveal';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { image6, image2, image3 } from '../assets/posts/post1';
import { p2i1, p2i2, p2i3 } from '../assets/posts/post2';

export default function UpdatesSection() {
  const posts = [
    {
      id: 2,
      title: "🔍 Factory Visit | Understanding Plastic Flow for Sustainable Construction",
      date: "May 05, 2025",
      description: "Team EnvoRick visited a district-level plastic waste collection and shredding facility in Barishal. These factories collect plastic waste from across the district and process them by shredding into smaller pieces. We collected samples of HDPE and PET plastics from their facility to analyze their potential in concrete brick production. During our visit, we observed the shredding process and how plastics are handled.Spoke with workers and factory owners to understand their business model. Explored what happens to the shredded plastics — from storage in tons to resale or export. Learned how plastics are segregated, cleaned, and stored. This visit provided crucial insights into the local plastic supply hain, helping us assess the viability of integrating recycled plastic waste into sustainable construction materials.",
      images: [
        p2i1,
        p2i2,
        p2i3
      ]
    },
    {
      id: 1,
      title: "🧱 Field Visit for EnvoRick | Exploring Plastic Waste Chain in Barishal.",
      date: "May 03, 2025",
      description: "As part of our ongoing research on “Plastic Concrete Bricks” our Team EnvoRick visited local scrap dealers in the Rupatali area of Barishal. The goal was to deeply understand the current system of plastic waste collection and flow to evaluate how these plastics can be repurposed in sustainable construction.",
      images: [
        image2,
        image6,
        image3
      ]
    }
  ];

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
              <div className="bg-gray-50 p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <ScrollReveal animation="fadeUp">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{post.description}</p>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {post.images.map((img, imgIndex) => (
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
