/* eslint-disable no-unused-vars */
import React from 'react';

const HomePage = () => {
  // Sample movie data with images
  const movieBlogs = [
    {
      title: 'Inception',
      description: 'A mind-bending thriller about dream manipulation.',
      image: 'https://www.circlesixmagazine.com/cms2/wp-content/uploads/2010/07/inception.jpg',
    },
    {
      title: 'The Dark Knight',
      description: 'A crime thriller featuring the legendary Batman.',
      image: 'https://m.media-amazon.com/images/I/51WjxbxxVPL._AC_SY679_.jpg',
    },
    {
      title: 'Interstellar',
      description: 'A space adventure to save humanity from extinction.',
      image: 'https://www.hauweele.net/~gawen/blog/wp-content/uploads/2014/11/interstellar.jpg',
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers the disturbing truth about reality.',
      image: 'https://images.squarespace-cdn.com/content/v1/6256f292b9dd990c2cdbc28f/a068464f-0e4d-454f-b746-f41e01f459f2/Ep+90-The+Matrix-Website.jpg',
    },
    {
      title: 'The Lord of the Rings',
      description: 'An epic journey to destroy the One Ring.',
      image: 'https://assets-prd.ignimgs.com/2022/07/29/hobbit-1-1659123079896.jpg',
    },
    {
      title: 'Avatar',
      description: 'A human explores a beautiful but dangerous alien world.',
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/avatar_2_movie_review-one_one.jpg?VersionId=ql_8qA_NEEEeNQvuXDtQDAfEap.Lzd5d.jpg',
    },
    {
      title: 'Gladiator',
      description: 'A Roman general seeks vengeance after being betrayed.',
      image: 'https://i.pinimg.com/736x/4f/49/5e/4f495e0b481e2b7279a5d9f9e29c85be.jpg',
    },
    {
      title: 'Titanic',
      description: 'A love story aboard the ill-fated ship, Titanic.',
      image: 'https://asianatimes.com/wp-content/uploads/2022/07/7Y10vpS2-232e10e134cf1d24f10dae39073377d7.jpg',
    },
    {
      title: 'Jurassic Park',
      description: 'Dinosaurs are brought back to life in a theme park.',
      image: 'https://hips.hearstapps.com/hmg-prod/images/jurassic-park-movies-in-order-2018-jurassic-world-fallen-kingdom-1655123535.jpeg?crop=0.667xw:1.00xh;0,0&resize=980:*.jpg',
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
