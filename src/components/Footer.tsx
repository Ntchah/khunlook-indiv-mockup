import React from 'react';

const logos = [
  '/img/sponsor/Chula-trans-logo.png',
  '/img/sponsor/HSAI-logo.png',
  '/img/sponsor/KKU-logo_2.png',
  '/img/sponsor/MOPH-logo.png',
  '/img/sponsor/NRCT-logo.png',
  '/img/sponsor/NSTDA-logo.png',
  '/img/sponsor/RCPT-logo.png',
  '/img/sponsor/SLL-trans-logo.png',
  '/img/sponsor/SSS-trans-logo.png',
];

export default function Footer() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-9 xl:grid-cols-9">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-24 w-auto max-h-24"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-6 sm:mx-auto lg:my-8">
        <hr className="border-gray-200 dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 KhunLook. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
