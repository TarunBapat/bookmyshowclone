import express from "express";
import {
  updateMovie,
  deleteMovie,
  createMovie,
  getMovieById,
} from "../controllers/movie.controller.js";
import Auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", Auth, createMovie);
router.put("/:id", Auth, updateMovie);
router.delete("/:id", Auth, deleteMovie);
router.put("/:id", getMovieById);

export default router;
