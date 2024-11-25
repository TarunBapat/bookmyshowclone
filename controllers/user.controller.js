import User from "../models/userSchema.model.js";

// async function loginUser(req, res) {}
const createUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    console.log("userDatauserDatauserData", name, email, password, isAdmin);
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
// async function updateUser() {
//   try {
//     const userData = req.body;
//     const user = User.createUser(userData);
//     res.status(200).send(user);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// }
// async function deleteUser() {
//   try {
//     const userData = req.body;
//     const user = User.createUser(userData);
//     res.status(200).send(user);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// }
// async function getUserdDetails() {
//   try {
//     const userData = req.body;
//     const user = User.createUser(userData);
//     res.status(200).send(user);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// }
// async function getUser() {
//   try {
//     const userData = req.body;
//     const user = User.createUser(userData);
//     res.status(200).send(user);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// }

export {
  //   loginUser,
  createUser,
  //   updateUser,
  //   deleteUser,
  //   getUserdDetails,
  //   getUser,
};
