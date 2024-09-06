/* eslint-disable no-unused-vars */
import React from 'react';

const HomePage = () => {
  // Sample movie data with images
  const movieBlogs = [
    {
      title: 'Inception',
      description: 'A mind-bending thriller about dream manipulation.',
      image: 'https://m.media-amazon.com/images/I/51V5ZpFyaFL._AC_.jpg',
    },
    {
      title: 'The Dark Knight',
      description: 'A crime thriller featuring the legendary Batman.',
      image: 'https://m.media-amazon.com/images/I/51WjxbxxVPL._AC_SY679_.jpg',
    },
    {
      title: 'Interstellar',
      description: 'A space adventure to save humanity from extinction.',
      image: 'https://m.media-amazon.com/images/I/61y-TWElcDL._AC_SY679_.jpg',
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers the disturbing truth about reality.',
      image: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
    },
    {
      title: 'The Lord of the Rings',
      description: 'An epic journey to destroy the One Ring.',
      image: 'https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg',
    },
    {
      title: 'Avatar',
      description: 'A human explores a beautiful but dangerous alien world.',
      image: 'https://m.media-amazon.com/images/I/41vuKQeOH0L._AC_.jpg',
    },
    {
      title: 'Gladiator',
      description: 'A Roman general seeks vengeance after being betrayed.',
      image: 'https://m.media-amazon.com/images/I/51AwiqYQNeL._AC_.jpg',
    },
    {
      title: 'Titanic',
      description: 'A love story aboard the ill-fated ship, Titanic.',
      image: 'https://m.media-amazon.com/images/I/51rggtPgmRL._AC_.jpg',
    },
    {
      title: 'Jurassic Park',
      description: 'Dinosaurs are brought back to life in a theme park.',
      image: 'https://m.media-amazon.com/images/I/51oT9tZ-rQL._AC_.jpg',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 py-12">
      {/* Big div with welcome message */}
      <div className="text-center bg-white p-12 rounded-lg shadow-lg mb-12">
        <h1 className="text-6xl font-bold mb-4">Welcome to PIV Movies Promotion</h1>
        <p className="text-lg mb-6">
          Discover the latest movie releases and upcoming events. We provide information about movies, cast, and trailers.
        </p>
        <img src="src/assets/movie-banner.jpg" alt="Movies" className="w-full h-64 object-cover rounded-md" />
      </div>

      {/* 3-column grid with 9 movie blogs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
        {movieBlogs.map((movie, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
            <p className="text-gray-600">{movie.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
