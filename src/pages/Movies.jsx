/* eslint-disable no-unused-vars */
import React from 'react';
import NewMoviePost from '../components/NewMoviePost';

const Movies = () => {
  const movies = [
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      image: 'src/assets/inception.jpg',
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time.',
      image: 'src/assets/interstellar.jpg',
    },
    // Add more movie objects here
  ];

  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Latest Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie, index) => (
          <NewMoviePost key={index} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default Movies;
