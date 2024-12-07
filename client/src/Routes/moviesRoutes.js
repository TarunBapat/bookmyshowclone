import MovieDetail from "../pages/Movies/MovieDetail";
import MoviesList from "../pages/Movies/MoviesList";

const MovieRoutes = [
  { path: "/movies", component: MoviesList, exact: true },
  { path: "/movies/:movieId", component: MovieDetail, exact: true },
];

export default MovieRoutes;
