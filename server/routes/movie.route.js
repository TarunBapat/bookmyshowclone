import express from "express";
import {
  updateMovie,
  deleteMovie,
  createMovie,
  getMovieById,
  getAllMovies,
} from "../controllers/movie.controller.js";
import Auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", Auth, createMovie);
router.put("/:id", Auth, updateMovie);
router.delete("/:id", Auth, deleteMovie);
router.get("/movies/:id", getMovieById);
router.get("/movies", getAllMovies);

export default router;
