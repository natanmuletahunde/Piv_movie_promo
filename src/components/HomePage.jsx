/* eslint-disable no-unused-vars */
import React from "react";

const HomePage = () => {
  // Sample movie data with images
  const movieBlogs = [
    {
      title: "Inception",
      description: "A mind-bending thriller about dream manipulation.",
      image:
        "https://www.circlesixmagazine.com/cms2/wp-content/uploads/2010/07/inception.jpg",
    },
    {
      title: "The Dark Knight",
      description: "A crime thriller featuring the legendary Batman.",
      image:
        "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    },
    {
      title: "Interstellar",
      description: "A space adventure to save humanity from extinction.",
      image:
        "https://www.hauweele.net/~gawen/blog/wp-content/uploads/2014/11/interstellar.jpg",
    },
    {
      title: "The Matrix",
      description: "A hacker discovers the disturbing truth about reality.",
      image:
        "https://images.squarespace-cdn.com/content/v1/6256f292b9dd990c2cdbc28f/a068464f-0e4d-454f-b746-f41e01f459f2/Ep+90-The+Matrix-Website.jpg",
    },
    {
      title: "The Lord of the Rings",
      description: "An epic journey to destroy the One Ring.",
      image:
        "https://assets-prd.ignimgs.com/2022/07/29/hobbit-1-1659123079896.jpg",
    },
    {
      title: "Avatar",
      description: "A human explores a beautiful but dangerous alien world.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/avatar_2_movie_review-one_one.jpg?VersionId=ql_8qA_NEEEeNQvuXDtQDAfEap.Lzd5d.jpg",
    },
    {
      title: "Gladiator",
      description: "A Roman general seeks vengeance after being betrayed.",
      image:
        "https://i.pinimg.com/736x/4f/49/5e/4f495e0b481e2b7279a5d9f9e29c85be.jpg",
    },
    {
      title: "Titanic",
      description: "A love story aboard the ill-fated ship, Titanic.",
      image:
        "https://prdaficalmjediwestussa.blob.core.windows.net/images/2020/05/AFI20_Titanic_Blog_Image.jpg",
    },
    {
      title: "Jurassic Park",
      description: "Dinosaurs are brought back to life in a theme park.",
      image:
        "https://bleedingcool.com/wp-content/uploads/2022/04/JWD_Adv_1Sht1_RGB_1-1200x900.jpg",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-black py-12">
  {/* Big div with welcome message and background image */}
  <div
    className="text-center bg-cover bg-center p-12 rounded-lg shadow-lg mb-12 w-3/4"
    style={{
      backgroundImage:
        "url(https://img.freepik.com/premium-photo/back-view-man-watching-movie-sofa-night-room-text_410516-26737.jpg)",
    }}
  >
    <h1 className="text-6xl font-bold mb-4 text-white">
      Welcome to PIV Movies Promotion
    </h1>
    <p className="text-lg mb-6 text-gray-200">
      Discover the latest movie releases and upcoming events. We provide
      information about movies, cast, and trailers.
    </p>
  </div>

  {/* 3-column grid with 9 movie blogs */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
    {movieBlogs.map((movie, index) => (
      <div
        key={index}
        className="bg-gray-800 p-8 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
      >
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-bold text-white mb-2">
          {movie.title}
        </h3>
        <p className="text-gray-300">{movie.description}</p>
      </div>
    ))}
  </div>

  {/* Three big divs with background images */}
  <div className="mt-12 w-full flex flex-col gap-6">
    {/* First div */}
    <div
      className="bg-cover bg-center h-96 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
      style={{
        backgroundImage:
          "url(https://images-1.rakuten.tv/storage/snapshot/shot/dc1babd1-8119-49b1-905f-9735430e1911-snapshot-1590664727-width936-quality90.jpeg)",
      }}
    >
      <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-white"></div>
    </div>

    {/* Second div */}
    <div
      className="bg-cover bg-center h-96 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
      style={{
        backgroundImage:
          "url(https://cdn.flickeringmyth.com/wp-content/uploads/2022/05/SharkBait_AppleTrailers_Poster_2.jpg)",
      }}
    >
      <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-white"></div>
    </div>

    {/* Third div */}
    <div
      className="bg-cover bg-center h-96 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
      style={{
        backgroundImage:
          "url(https://images.bauerhosting.com/legacy/empire-images/articles/57b338a20c6437272f5d0881/bill-skargard-it-pennywise.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80)",
      }}
    >
      <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-white"></div>
    </div>
  </div>

  {/* Additional information divs */}
  <div className="mt-12 w-full flex flex-col md:flex-row gap-6 justify-center">
  {/* Use This Website div */}
  <div className="bg-gray-800 p-8 rounded-lg shadow-md flex-1 max-w-sm relative border-2 border-black backdrop-blur-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
    <h2 className="text-2xl font-bold text-white mb-4">Use This Website</h2>
    <p className="text-gray-300">
      Welcome to PIV Movies Promotion! Our website is designed for movie enthusiasts and casual viewers alike. Here, you can explore a comprehensive database of the latest movie releases, read insightful reviews, and discover upcoming events in the film industry. Whether you are looking for the next blockbuster hit or an indie gem, our curated lists and articles provide all the information you need. Additionally, we offer trailers and sneak peeks to keep you informed and excited. Join us to enhance your movie-watching experience and never miss out on the latest buzz in cinema!
    </p>
  </div>

  {/* Aim of This Website div */}
  <div className="bg-gray-800 p-8 rounded-lg shadow-md flex-1 max-w-sm relative border-2 border-black backdrop-blur-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
    <h2 className="text-2xl font-bold text-white mb-4">Aim of This Website</h2>
    <p className="text-gray-300">
      The primary aim of PIV Movies Promotion is to create a vibrant community for movie lovers. We strive to provide a platform that not only informs but also engages users in discussions about films. By offering detailed information about movie releases, cast, and production details, we want to empower our audience to make informed choices about what to watch. Furthermore, we aim to support filmmakers and the film industry by promoting upcoming projects and events. Our goal is to foster a love for cinema and provide a space where fans can come together to celebrate their passion for movies.
    </p>
  </div>
</div>
</section>
  );
};

export default HomePage;
