/* eslint-disable no-unused-vars */
import React from 'react';

const Movies = () => {
  return (
    <section className="container mx-auto h-screen bg-black flex flex-col items-center">
      <h2 className="text-6xl font-bold text-white text-center mt-8">Latest Movies</h2>
      <div className="flex-grow"></div> {/* This will push the content to the top */}
    </section>
  );
};

export default Movies;