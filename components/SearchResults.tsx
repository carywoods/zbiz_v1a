
import React from 'react';
import type { SearchResult, GroundingChunk } from '../types';
import { LinkIcon, MapPinIcon } from './icons';

interface SearchResultsProps {
  result: SearchResult;
  onClear: () => void;
}

const SourceLink: React.FC<{ chunk: GroundingChunk }> = ({ chunk }) => {
  if (chunk.web) {
    return (
      <a
        href={chunk.web.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 p-3 bg-white hover:bg-ivory/50 rounded-lg border transition-colors duration-200"
      >
        <LinkIcon className="w-5 h-5 text-copper shrink-0" />
        <span className="text-sm font-medium text-dark-blue truncate">{chunk.web.title}</span>
      </a>
    );
  }
  if (chunk.maps) {
     return (
      <a
        href={chunk.maps.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 p-3 bg-white hover:bg-ivory/50 rounded-lg border transition-colors duration-200"
      >
        <MapPinIcon className="w-5 h-5 text-copper shrink-0" />
        <span className="text-sm font-medium text-dark-blue truncate">{chunk.maps.title}</span>
      </a>
    );
  }
  return null;
};


export const SearchResults: React.FC<SearchResultsProps> = ({ result, onClear }) => {
  return (
    <div className="mt-8 max-w-4xl mx-auto animate-fade-in">
       <button 
        onClick={onClear} 
        className="mb-4 text-sm text-copper hover:underline"
      >
        &larr; Back to Home
      </button>

      <div className="bg-white/50 p-6 sm:p-8 rounded-xl shadow-lg border border-dark-blue/10">
        <h2 className="text-2xl font-bold mb-4 text-dark-blue">Search Results</h2>
        <div
          className="prose prose-lg max-w-none text-dark-blue/90"
          dangerouslySetInnerHTML={{ __html: result.text.replace(/\n/g, '<br />') }}
        />

        {result.sources && result.sources.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold border-t pt-4 text-dark-blue/80">Sources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {result.sources.map((chunk, index) => (
                <SourceLink key={index} chunk={chunk} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
