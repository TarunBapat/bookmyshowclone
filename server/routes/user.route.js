import express from "express";
import {
  loginUser,
  createUser,
  updateUser,
  deleteUser,
  forgetUserPassword,
  getAllUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

// login user

router.post("/login", loginUser);

// create user

router.post("/create", createUser);

// update user

router.put("/:userid", updateUser);

// delete user

router.delete("/:userid", deleteUser);

// get all users

router.get("/", getAllUsers);

//forget-password

router.post("/forget-password", forgetUserPassword);

export default router;
