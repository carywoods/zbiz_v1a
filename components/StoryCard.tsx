
import React from 'react';
import type { Story } from '../types';

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group">
      <img className="w-full h-48 object-cover" src={story.imageUrl} alt={story.title} />
      <div className="p-6">
        <span className="inline-block bg-copper/20 text-copper text-xs font-semibold px-2 py-1 rounded-full mb-2">{story.category}</span>
        <h3 className="text-xl font-bold mb-2 group-hover:text-copper transition-colors">{story.title}</h3>
        <p className="text-dark-blue/80 text-sm mb-4">{story.excerpt}</p>
        <div className="text-xs text-dark-blue/60">
          <span>By {story.author}</span> &bull; <span>{story.date}</span>
        </div>
      </div>
    </div>
  );
};
