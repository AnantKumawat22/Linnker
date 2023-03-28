import Token from "@/models/Token";
import connect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import initMiddleware from "../../../lib/init-middleware";
import validateMiddleware from "../../../lib/validate-middleware";
import { check } from "express-validator";

// Validate input fields.
const validateBody = initMiddleware(
  validateMiddleware([
    check(
      "password",
      "Password must have atleast 6 characters and atmost 40 characters."
    ).isLength({ min: 6, max: 40 }),
  ])
);

// Reset password: POST "/api/auth/resetpassword".
export default async function handler(req, res) {
  const { password, authtoken } = req.body;

  try {
    // Connect Database.
    await connect();
    if (req.method == "POST") {
      // Validating input fields.
      await validateBody(req, res);

      // Check this token exist or not.
      let token = await Token.findOne({ token: authtoken });
      if (!token) {
        return res.status(400).json({
          msg: "Invalid link. Try to reset password again.",
          success: false,
        });
      }

      // Convert the password in hash.
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(password, salt);

      // Get user with this token and update password.
      let getuser = token.user;
      let user = await User.updateOne(
        { _id: getuser },
        { $set: { password: secpass } }
      );
      if (!user) {
        return res.status(400).json({
          msg: "Invalid link. Try to reset password again.",
          success: false,
        });
      }

      await Token.findOneAndDelete({ _id: token._id });

      res
        .status(200)
        .json({ msg: "Password Changed Successfully", success: true });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", success: false });
  }
}
