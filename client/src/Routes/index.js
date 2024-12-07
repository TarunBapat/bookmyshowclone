import MovieRoutes from "./moviesRoutes";
import TheatreRoutes from "./theatreRoutes";
import userRoutes from "./userRoutes";

const allRoutes = [...userRoutes, ...TheatreRoutes, ...MovieRoutes];

export default allRoutes;
