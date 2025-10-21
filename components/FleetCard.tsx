import React from 'react';

interface FleetCardProps {
  category: string;
  description: string;
  imageUrl: string;
  buttonText: string;
}

export const FleetCard: React.FC<FleetCardProps> = ({ category, description, imageUrl, buttonText }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-amber-500/10 hover:-translate-y-2">
      <div className="overflow-hidden h-56">
        <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" src={imageUrl} alt={category} />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-serif font-bold text-amber-400 mb-3">{category}</h3>
        <p className="text-gray-400 text-base mb-6 h-20">{description}</p>
        <a href="#contact" className="w-full text-center inline-block bg-gray-700 text-white font-semibold py-3 px-4 rounded-md hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300">
          {buttonText}
        </a>
      </div>
    </div>
  );
};
