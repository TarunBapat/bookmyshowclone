import { useEffect, useState } from "react";
import Api from "../../api/movieApi";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchAllMovies() {
      const response = await Api.allMovies();
      setMovies(response?.data?.movie);
    }
    fetchAllMovies();
  }, []);
  return (
    <div className="flex justify-start items-center h-screen bg-gray-100">
      {movies?.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};

export default MoviesList;
