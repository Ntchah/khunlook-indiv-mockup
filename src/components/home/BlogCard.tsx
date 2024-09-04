// components/BlogCard.js
import React from 'react';

export default function BlogCard({ date, category, title, description, author, authorRole, authorImage }:{
     date: string,
     category: string,
     title: string,
     description: string,
     author: string,
     authorRole: string,
     authorImage: string
   }) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={date} className="text-gray-500">{date}</time>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href="#">
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src={authorImage} alt={author} className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href="#">
              <span className="absolute inset-0"></span>
              {author}
            </a>
          </p>
          <p className="text-gray-600">{authorRole}</p>
        </div>
      </div>
    </article>
  );
}
