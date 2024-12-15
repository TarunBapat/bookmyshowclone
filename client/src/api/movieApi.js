import axios from "axios";

const token = localStorage.getItem("authToken");
const moviesClient = () => {
  const client = axios.create({
    baseURL: "http://localhost:5001/",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return {
    allMovies: () => client.get("/api/v1/movie/movies"),
    getMovieById: (id) => client.get(`/api/v1/movie/movies/${id}`),
    createMovie: (payload) =>
      client.post("/api/v1/movie/create", JSON.stringify(payload)),
  };
};

const Api = moviesClient();
export default Api;
