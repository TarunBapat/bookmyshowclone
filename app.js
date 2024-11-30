import express from "express";
import userRoute from "./routes/user.route.js";
import theatreRoute from "./routes/theatre.route.js";
import movieRoute from "./routes/movie.route.js";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api/v1/users", userRoute);
app.use("/api/v1/theatre", theatreRoute);
app.use("/api/v1/movie", movieRoute);

export default app;
