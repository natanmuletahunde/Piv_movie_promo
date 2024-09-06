/* eslint-disable no-unused-vars */
import React from 'react';

const ContactPage = () => {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="border p-2 w-full" />
        <input type="email" placeholder="Your Email" className="border p-2 w-full" />
        <textarea placeholder="Your Message" className="border p-2 w-full" rows="5"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  );
};

export default ContactPage;
