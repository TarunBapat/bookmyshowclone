import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { poster, title, genre, language, duration, _id } = movie;
  const navigate = useNavigate();
  return (
    <div
      className="max-w-sm bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
      onClick={() => navigate(`/movies/${_id}`)}
    >
      <img
        src={poster}
        alt={`${title} poster`}
        className="rounded-t-lg w-full h-60 object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <div className="mb-4">
          <span className="font-medium text-gray-700">Genre:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {genre?.map((g, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <span className="font-medium text-gray-700">Language:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {language?.map((l, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-600">
          <span className="font-medium">Duration:</span> {duration}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
