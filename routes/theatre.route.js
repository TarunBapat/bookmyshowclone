import express from "express";
import {
  updateTheatre,
  deleteTheatre,
  createTheatre,
  getTheatreById,
} from "../controllers/theatre.controller.js";
import Auth from "../middleware/auth.middleware.js";
import isAdmin from "../middleware/isAdmin.middleware.js";

const router = express.Router();

router.post("/create", Auth, isAdmin, createTheatre);
router.post("/:id", Auth, isAdmin, updateTheatre);
router.delete("/:id", Auth, isAdmin, deleteTheatre);
router.put("/:id", getTheatreById);

export default router;
