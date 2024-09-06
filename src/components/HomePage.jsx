/* eslint-disable no-unused-vars */
import React from 'react';

const HomePage = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-12 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold mb-4">Welcome to PIV Movies Promotion</h1>
        <p className="text-lg mb-6">
          Discover the latest movie releases and upcoming events. We provide information about movies, cast, and trailers.
        </p>
        <img src="src/assets/movie-banner.jpg" alt="Movies" className="w-full h-64 object-cover rounded-md" />
      </div>
    </section>
  );
};

export default HomePage;
