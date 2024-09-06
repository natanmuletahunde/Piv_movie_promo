/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const NewMoviePost = ({ title, description, image }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default NewMoviePost;
