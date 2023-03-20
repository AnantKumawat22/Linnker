import connect from "@/lib/mongodb";
import User from "@/models/User";
import initMiddleware from "../../../lib/init-middleware";
import validateMiddleware from "../../../lib/validate-middleware";
import { check } from "express-validator";
import jwt from 'jsonwebtoken';
import Token from "@/models/Token"; 

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
    if (req.method == "POST") {
      // Generating Token
      const data = {
        user: {
          id: user.id,
        }
      };

      const authtoken = jwt.sign(data, process.env.JWT_SECRET);

      let token = await Token.create({
        user: user._id,
        token: authtoken,
      });
    }
  } catch (error) {}
}
