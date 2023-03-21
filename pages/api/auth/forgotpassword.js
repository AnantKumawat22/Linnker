import connect from "@/lib/mongodb";
import User from "@/models/User";
import initMiddleware from "../../../lib/init-middleware";
import validateMiddleware from "../../../lib/validate-middleware";
import { check } from "express-validator";
import jwt from "jsonwebtoken";
import Token from "@/models/Token";
import emailSend from "@/lib/emailsend";

// Validate input fields.
const validateBody = initMiddleware(
  validateMiddleware([check("email", "Enter a valid email.").isEmail()])
);

// Forgot password: POST "/api/auth/forgotpassword".
export default async function handler(req, res) {
  const { email } = req.body;

  try {
    // Connect Database.
    await connect();

    if (req.method == "POST") {
      // Validating input fields.
      await validateBody(req, res);

      // Check this email exist or not.
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          msg: "This email doesn't exists. Please signup",
          success: false,
        });
      }

      // Check User Verified or not.
      if(!user.verified){
        return res
          .status(400)
          .json({
            success: false,
            msg: "Please Verify your email first. A verification link is already sent to your email account.",
          });
      }

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

      // Sending Forgot Password Mail link to user's email.
      const message = `http://localhost:3000/forgotpassword?token=${authtoken}`;

      await emailSend(user.email, "Linnker - Reset Password link", message);

      res.status(200).json({
        msg: "Password reset link is sent to you. Please check your mail.",
        success: true,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", success: false });
  }
}
