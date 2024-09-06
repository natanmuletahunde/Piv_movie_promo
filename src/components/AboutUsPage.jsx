/* eslint-disable no-unused-vars */
import React from 'react';

const AboutUsPage = () => {
  return (
    <section className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="text-lg mb-6 text-gray-300 max-w-2xl text-center">
        We are dedicated to promoting the best movies and providing movie enthusiasts with the latest news, reviews, and updates. Our mission is to create a vibrant community where fans can discover new films, share their opinions, and celebrate the art of cinema. Join us on this cinematic journey!
      </p>
      
      <h3 className="text-2xl font-semibold mb-4">Our Features</h3>
      <ul className="list-disc list-inside mb-6">
        <li>Comprehensive movie database</li>
        <li>Latest movie news and updates</li>
        <li>In-depth reviews and ratings</li>
        <li>Upcoming events and screenings</li>
        <li>Community discussions and forums</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
      <div className="flex flex-col items-center space-y-2">
        <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
          IMDb
        </a>
        <a href="https://www.rottentomatoes.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
          Rotten Tomatoes
        </a>
        <a href="https://www.boxofficemojo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
          Box Office Mojo
        </a>
        <a href="https://www.filmfreedom.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
          Film Freedom
        </a>
      </div>
    </section>
  );
};

export default AboutUsPage;