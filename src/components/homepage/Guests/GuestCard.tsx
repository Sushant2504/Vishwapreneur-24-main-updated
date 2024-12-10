import React, { useState } from 'react';
import { GuestCardProps } from './types';

export function GuestCard({ name, role, description, imageUrl }: GuestCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className="group w-[280px] sm:w-[300px] h-[380px] sm:h-[400px] bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full">
        {/* Guest Image */}
        <div 
          className="absolute inset-0 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:blur-sm"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Content Overlay */}
        <div 
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            className="text-white text-center"
            style={{
              transform: `translate(${position.x * 20}px, ${position.y * 20}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{name}</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">{role}</p>
            <p className="text-xs sm:text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
