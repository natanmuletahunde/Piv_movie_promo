/* eslint-disable no-unused-vars */
import React from 'react';

const ContactPage = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_640.jpg')", 
      }}
    >
      <div className="bg-black bg-opacity-70 border-2 border-black p-8 rounded-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-white p-2 w-full bg-transparent text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-white p-2 w-full bg-transparent text-white"
          />
          <textarea
            placeholder="Your Message"
            className="border border-white p-2 w-full bg-transparent text-white"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;