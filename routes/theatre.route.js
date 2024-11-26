import express from "express";
import { createTheatre } from "../controllers/theatre.controller.js";
import Auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", Auth, createTheatre);

export default router;
