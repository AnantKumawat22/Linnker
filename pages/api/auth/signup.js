import connect from "../../../lib/mongodb";
import initMiddleware from "../../../lib/init-middleware";
import validateMiddleware from "../../../lib/validate-middleware";
import { check } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../../models/User.js";
import Token from "@/models/Token";
import emailSend from "../../../lib/emailsend";
require("dotenv").config();

// Validate input fields.
const validateBody = initMiddleware(
  validateMiddleware([
    check(
      "name",
      "Name must have atleast 3 characters and atmost 40 characters."
    ).isLength({ min: 3, max: 40 }),
    check("email", "Enter a valid email.").isEmail(),
    check(
      "password",
      "Password must have atleast 6 characters and atmost 40 characters."
    ).isLength({ min: 6, max: 40 }),
  ])
);

// Create a User using: POST "/auth/signup".
export default async function handler(req, res) {
  const { name, email, password } = req.body;

  try {
    // Connect to Database.
    connect();

    if (req.method == "POST") {
      // Validating input fields.
      await validateBody(req, res);

      // Check whether the user with this email exists already or not.
      let user = await User.findOne({ email });

      // Check is user already exist and verified is true. No need to send verify email.
      if (user && user.verified == true) {
        return res.status(400).json({
          msg: "Sorry a user with this email already exists.",
          success: false,
        });
      }

      // Check is user already exist and verified is false. Delete his/her token, that user, create again with updated values and send verify email.
      if (user && user.verified == false) {
        await User.findByIdAndRemove({ _id: user._id });
        await Token.findOneAndDelete({ user: user._id });
      }

      // Create a new user and storing password in hash.
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(password, salt);

      user = await User.create({
        name,
        password: secpass,
        email,
      });

      // Generating Token
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, process.env.JWT_SECRET);

      let token = await Token.create({
        user: user._id,
        token: authtoken,
      });

      // Sending verification link to user's email.
      const message = `https://linnker.vercel.app/api/verifyemail/verify/${user._id}/${authtoken}`;

      await emailSend(user.email, "Linnker email Verification link", message);

      return res.status(200).json({
        msg: "Email sent to your account. Please verify and Login.",
        success: true,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", success: false });
  }
}
