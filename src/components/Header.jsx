/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Movie Promo</h1>
        <nav>
          <Link to="/" className="px-3">Home</Link>
          <Link to="/movies" className="px-3">Movies</Link>
          <Link to="/about" className="px-3">About Us</Link>
          <Link to="/contact" className="px-3">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
