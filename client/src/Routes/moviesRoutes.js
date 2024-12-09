import MovieDetail from "../pages/Movies/MovieDetail";
import MoviesList from "../pages/Movies/MoviesList";
import AllTheatres from "../pages/Theatres/AllTheatres";

const MovieRoutes = [
  { path: "/movies", component: MoviesList, exact: true },
  { path: "/movies/:movieId", component: MovieDetail, exact: true },
  { path: "/movies/:movieId/theatres", component: AllTheatres, exact: true },
];

export default MovieRoutes;
