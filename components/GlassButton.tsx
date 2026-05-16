'use client';

import React from 'react';

export function GlassButton({ 
  href, 
  children,
  variant = 'primary'
}: { 
  href: string; 
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-white via-blue-600 to-red-600 text-black hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105' 
          : 'border-2 border-transparent bg-gradient-to-r from-white via-blue-600 to-red-600 bg-clip-border text-white hover:scale-105'
        }
      `}
    >
      {children}
    </a>
  );
}
