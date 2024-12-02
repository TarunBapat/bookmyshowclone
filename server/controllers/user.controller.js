import User from "../models/userSchema.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function loginUser(req, res) {
  const { email, password } = req.body;
  // console.log("email, password", email, password);
  try {
    const user = await User.findOne({ email: email });
    // console.log("user", user);
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    console.log("token", token);
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
const createUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      isAdmin,
    });
    console.log("userDatauserDatauserData", user);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: "error while creating user" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    console.log({ name, email, password, isAdmin });
    const user = await User.updateOne(
      { name: "usergfdfhg" },
      { $set: { name, email, password, isAdmin } }
    );
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: "error while updating user" });
  }
};
async function deleteUser(req, res) {
  try {
    // const userData = req.body;
    const user = await User.deleteOne({ name: "dsddsdsd" });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: "error while deleting user" });
  }
}
// async function getUserdDetails() {
//   try {
//     const userData = req.body;
//     const user = User.createUser(userData);
//     res.status(200).send(user);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// }
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: "error while grtting all user" });
  }
}

export {
  loginUser,
  createUser,
  updateUser,
  deleteUser,
  //   getUserdDetails,
  getAllUsers,
};
