import express from "express";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import theatreRoute from "./routes/theatre.route.js";
import movieRoute from "./routes/movie.route.js";
import showRoute from "./routes/show.route.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/v1/users", userRoute);
app.use("/api/v1/theatre", theatreRoute);
app.use("/api/v1/movie", movieRoute);
app.use("/api/v1/show", showRoute);

export default app;
