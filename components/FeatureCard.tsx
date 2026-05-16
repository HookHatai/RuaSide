import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="relative group h-full">
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white via-blue-600 to-red-600 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
      
      {/* Card content */}
      <div className="relative px-6 sm:px-8 py-6 bg-black rounded-lg border border-transparent h-full flex flex-col">
        <div className="flex items-start gap-3 sm:gap-4 flex-1">
          {icon && (
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="gradient-text text-lg sm:text-xl font-bold mb-2">
              {title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
