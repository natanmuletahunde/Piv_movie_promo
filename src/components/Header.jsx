/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Movie Promo</h1>
        <nav>
          <NavLink
            to="/"
            className="px-4 hover:text-red-500 focus:text-red-600 active:text-red-600 font-poppins"
            activeClassName="text-red-600"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="px-4 hover:text-red-500 focus:text-red-600 active:text-red-600 font-poppins"
            activeClassName="text-red-600"
          >
            Movies
          </NavLink>
          <NavLink
            to="/about"
            className="px-4 hover:text-red-500 focus:text-red-600 active:text-red-600 font-poppins"
            activeClassName="text-red-600"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="px-4 hover:text-red-500 focus:text-red-600 active:text-red-600 font-poppins"
            activeClassName="text-red-600"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;