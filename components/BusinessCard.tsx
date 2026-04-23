
import React from 'react';
import type { Business } from '../types';
import { PhoneIcon, MapPinIcon } from './icons';

interface BusinessCardProps {
  business: Business;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-dark-blue/10 flex flex-col">
      <img className="w-full h-40 object-cover" src={business.imageUrl} alt={business.name} />
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-dark-blue">{business.name}</h4>
        <p className="text-sm text-copper font-semibold mb-2">{business.category}</p>
        <p className="text-sm text-dark-blue/70 mb-4 flex-grow">{business.description}</p>
        <div className="text-sm text-dark-blue/90 space-y-1 mt-auto">
          <div className="flex items-center">
            <MapPinIcon className="w-4 h-4 mr-2 shrink-0" />
            <span>{business.address}</span>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="w-4 h-4 mr-2 shrink-0" />
            <span>{business.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
