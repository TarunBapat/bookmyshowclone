import axios from "axios";

const moviesClient = () => {
  const client = axios.create({
    baseURL: "http://localhost:5001/",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    allMovies: () => client.get("/api/v1/movie/movies"),
    getMovieById: (id) => client.get(`/api/v1/movie/movies/${id}`),
  };
};

const Api = moviesClient();
export default Api;
