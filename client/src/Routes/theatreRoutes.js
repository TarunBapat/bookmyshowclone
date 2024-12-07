import AllTheatres from "../pages/Theatres/AllTheatres";

const TheatreRoutes = [
  { path: "/theatres", component: AllTheatres, exact: true },
  { path: "/theatres/:theatreId", component: AllTheatres, exact: true },
];

export default TheatreRoutes;
