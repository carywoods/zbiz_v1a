
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { StoryCard } from './components/StoryCard';
import { BusinessCard } from './components/BusinessCard';
import { SearchResults } from './components/SearchResults';
import { LoadingSpinner } from './components/LoadingSpinner';
import { searchZionsville } from './services/geminiService';
import { featuredStories, latestBusinesses } from './constants';
import type { Story, Business, SearchResult } from './types';

const App: React.FC = () => {
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number; } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        console.warn(`Could not get user location: ${err.message}. Using default.`);
        // Default to Zionsville, IN coordinates
        setUserLocation({ latitude: 39.9526, longitude: -86.2717 });
      }
    );
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    setIsLoading(true);
    setError(null);
    setSearchResult(null);
    try {
      const result = await searchZionsville(query, userLocation);
      setSearchResult(result);
    } catch (e: any) {
      setError(`An error occurred: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  const resetSearch = () => {
    setSearchResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-ivory text-dark-blue font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Discover Zionsville</h1>
          <p className="text-lg md:text-xl text-dark-blue/80">Your guide to local businesses, stories, and events.</p>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {isLoading && <LoadingSpinner />}
        {error && <p className="text-center text-red-600 mt-4">{error}</p>}

        {searchResult ? (
          <SearchResults result={searchResult} onClear={resetSearch} />
        ) : (
          <>
            <section id="featured-stories" className="my-16">
              <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-copper pb-2 mb-6">Featured Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredStories.map((story: Story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </section>

            <section id="latest-businesses" className="my-16">
              <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-copper pb-2 mb-6">Latest Business Listings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {latestBusinesses.map((business: Business) => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>
      <footer className="text-center py-6 bg-dark-blue text-ivory/70 mt-16">
        <p>&copy; {new Date().getFullYear()} Zionsville.biz. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
