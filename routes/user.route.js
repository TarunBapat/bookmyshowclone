import express from "express";
import {
  //   loginUser,
  createUser,
  //   updateUser,
  //   deleteUser,
  //   getUserdDetails,
  //   getUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// login user

// router.post("/login", loginUser);

// create user

router.post("/", createUser);

// update user

// router.put("/:userid", updateUser);

// delete user

// router.delete("/:userid", deleteUser);

// get user by id

// router.get("/", getUserdDetails);

// get user

// router.get("/:userid", getUser);

export default router;
