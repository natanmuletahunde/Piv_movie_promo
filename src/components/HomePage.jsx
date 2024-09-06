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
          className="bg-cover bg-center h-64 rounded-lg shadow-lg"
          style={{
            backgroundImage: "url(https://image-url.com/first-image.jpg)",
          }}
        >
          <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-white">
            <h2 className="text-4xl font-bold">Explore New Releases</h2>
          </div>
        </div>

        {/* Second div */}
        <div
          className="bg-cover bg-center h-64 rounded-lg shadow-lg"
          style={{
            backgroundImage: "url(https://image-url.com/second-image.jpg)",
          }}
        >
          <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-white">
            <h2 className="text-4xl font-bold">Upcoming Events</h2>
          </div>
        </div>

        {/* Third div */}
        <div
          className="bg-cover bg-center h-64 rounded-lg shadow-lg"
          style={{
            backgroundImage: "url(https://image-url.com/third-image.jpg)",
          }}
        >
          <div className="h-full bg-black bg-opacity-50 flex items-center justify-center text-white">
            <h2 className="text-4xl font-bold">Behind the Scenes</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
