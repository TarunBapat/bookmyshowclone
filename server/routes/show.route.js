import express from "express";
import {
  updateShow,
  deleteShow,
  createShow,
  getShowById,
} from "../controllers/show.controller.js";
import Auth from "../middleware/auth.middleware.js";
import isTheatreOwner from "../middleware/isTheatreOwner.middleware.js";

const router = express.Router();

router.post("/create", Auth, isTheatreOwner, createShow);
router.put("/:id", Auth, isTheatreOwner, updateShow);
router.delete("/:id", Auth, isTheatreOwner, deleteShow);
router.put("/:id", getShowById);

export default router;
