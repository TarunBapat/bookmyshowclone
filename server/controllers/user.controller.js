import User from "../models/userSchema.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
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
    const options = {
      withCredentials: true,
      httpOnly: true,
      secure: true,
    };

    console.log("token", token);
    res.cookie("accessToken", token, options);
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

async function forgetUserPassword(req, res) {
  const { email } = req.body;
  try {
    const userExists = await User.find({ email: email });
    if (!userExists) {
      return res.status(404).send("user not found");
    }
    // Generate JWT
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const resetLink = `http://localhost:3000/reset-password/${token}`;

    // Send email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASSWORD,
      },
    });

    transporter.sendMail(
      {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset",
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Home - Forgot Password</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333; text-align: center;">
        
          <div style="max-width: 600px; margin: 50px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #4CAF50; margin-bottom: 20px;">Welcome to Our Website</h1>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 30px;">
              If you've forgotten your password, click the link below to reset it. A reset link will be sent to your registered email.
            </p>
            <a href=${resetLink} style="display: inline-block; background: #4CAF50; color: #fff; text-decoration: none; font-size: 16px; padding: 10px 20px; border-radius: 5px;">
              Reset Your Password
            </a>
            <p style="margin-top: 20px; font-size: 14px; color: #888;">
              If you didn't request a password reset, please ignore this message.
            </p>
          </div>
        
          <footer style="margin-top: 30px; font-size: 12px; color: #aaa;">
            &copy; 2024 Your Company Name. All Rights Reserved.
          </footer>
        
        </body>
        </html>`,
      },
      (err, info) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Failed to send email" });
        }

        res.json({ message: "Password reset email sent successfully" });
      }
    );
  } catch (error) {}
}

export {
  loginUser,
  createUser,
  updateUser,
  deleteUser,
  forgetUserPassword,
  getAllUsers,
};
