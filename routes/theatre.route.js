import express from "express";
import {
  updateTheatre,
  deleteTheatre,
  createTheatre,
  getTheatreById,
} from "../controllers/theatre.controller.js";
import Auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", Auth, createTheatre);
router.post("/:id", Auth, updateTheatre);
router.delete("/:id", Auth, deleteTheatre);
router.put("/:id", getTheatreById);

export default router;
