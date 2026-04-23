
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-dark-blue text-ivory shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold">
          <a href="/" className="hover:text-copper transition-colors">Zionsville.biz</a>
        </div>
        <p className="hidden md:block text-ivory/80 italic">A Community of Builders.</p>
      </div>
    </header>
  );
};
