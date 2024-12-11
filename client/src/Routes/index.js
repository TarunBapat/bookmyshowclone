import AdminRoutes from "./adminRoutes";
import HomeRoutes from "./homeRoutes";
import MovieRoutes from "./moviesRoutes";
import TheatreRoutes from "./theatreRoutes";
import userRoutes from "./userRoutes";

const allRoutes = [
  ...userRoutes,
  ...TheatreRoutes,
  ...MovieRoutes,
  ...HomeRoutes,
  ...AdminRoutes,
];

export default allRoutes;
