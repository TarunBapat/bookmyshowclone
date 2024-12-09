import AllTheatres from "../pages/Theatres/AllTheatres";

const ShowRoutes = [
  { path: "/show", component: AllTheatres, exact: true },
  { path: "/theatres/:theatreId", component: AllTheatres, exact: true },
];

export default ShowRoutes;
