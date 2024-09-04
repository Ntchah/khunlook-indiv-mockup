// components/BlogSection.js
import React from 'react';
import BlogCard from './BlogCard';

export default function BlogSection() {
     const blogPosts = [
          {
            date: "Mar 16, 2020",
            category: "Nutrition",
            title: "Essential Nutrients for Growing Kids",
            description: "Learn about the vital nutrients children need for optimal growth and development, and how to incorporate them into their diet.",
            author: "Dr. Petch Sira",
            authorRole: "Pediatric Nutritionist",
            authorImage: "/img/user.png"
          },
          {
            date: "Jul 24, 2021",
            category: "Development",
            title: "Milestones in Early Childhood Development",
            description: "Discover the key developmental milestones for children in their early years and how to support their growth at each stage.",
            author: "Dr. Dongy JS Dalai",
            authorRole: "Child Psychologist",
               authorImage: "/img/user.png"
          },
          {
            date: "Oct 12, 2022",
            category: "Health",
            title: "Preventing Common Childhood Illnesses",
            description: "Understand the common illnesses children face and how to prevent them through proper hygiene and vaccinations.",
            author: "Dr. Faze Piyawudhi",
            authorRole: "Pediatrician",
               authorImage: "/img/user.png"
          },
        ];
        
        

  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog Suggestion</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-4 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
