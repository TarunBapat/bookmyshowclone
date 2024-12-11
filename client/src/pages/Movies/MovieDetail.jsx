import { useEffect, useState } from "react";
import Api from "../../api/movieApi";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  console.log("67545d30822a98ef7c435085", movieId);
  useEffect(() => {
    // Mock API Call - Replace this with your actual API endpoint
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await Api.getMovieById(movieId);
        setMovie(response?.data?.movie[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <div className="text-center text-gray-700">Loading movie details...</div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!movie) {
    return (
      <div className="text-center text-gray-700">No movie details found.</div>
    );
  }

  const { title, description, duration, genre, language, releaseDate, poster } =
    movie;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
      <div className="flex flex-col md:flex-row">
        <img
          src={poster}
          alt={title}
          className="w-full md:w-1/3 object-cover"
        />
        <div className="p-6 md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-600">
            <span className="font-medium">Duration:</span> {duration} hours
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-medium">Release Date:</span> {releaseDate}
          </p>
          <div className="mt-4">
            <p className="font-medium text-gray-700 mb-1">Genre:</p>
            <div className="flex flex-wrap gap-2">
              {genre.map((g, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="font-medium text-gray-700 mb-1">Languages:</p>
            <div className="flex flex-wrap gap-2">
              {language.map((l, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => navigate(`/movies/${movieId}/theatres`)}
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
