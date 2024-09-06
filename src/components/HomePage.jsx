/* eslint-disable no-unused-vars */
import React from 'react';

const HomePage = () => {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Welcome to Movie Promo</h2>
      <p className="mb-6">
        Discover the latest movie releases and upcoming events. We provide information about movies, cast, and trailers.
      </p>
      <img src="src/assets/movie-banner.jpg" alt="Movies" className="w-full h-64 object-cover" />
    </section>
  );
};

export default HomePage;
