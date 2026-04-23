
import React, { useState } from 'react';
import { SearchIcon } from './icons';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for businesses, events, or news in Zionsville..."
          className="w-full px-5 py-4 pr-12 text-lg text-dark-blue bg-white border-2 border-dark-blue/20 rounded-full focus:ring-2 focus:ring-copper focus:border-copper transition-shadow shadow-sm"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="absolute top-1/2 right-3 -translate-y-1/2 p-2 bg-copper text-white rounded-full hover:bg-copper/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-copper disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          <SearchIcon className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};
