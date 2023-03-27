import User from "@/models/User";
import jwt from "jsonwebtoken";
require("dotenv").config();

const isAuth =
  (roles = [], next) =>
  async (req, res) => {
    if (typeof roles === "string") roles = [roles];
    // Get the user from the jwt token and add id to req object.
    const token = req.headers?.authentication;
    if (!token)
      return res.status(401).json({
        success: false,
        mssg: "Please authenticate using a valid token.",
      });
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(data.user.id);
      if (!user)
        return res.status(401).json({
          success: false,
          msg: "User not found.",
        });
      if (!roles.includes(user.role))
        return res.status(401).json({
          success: false,
          msg: "Please authenticate using a valid token.",
        });
      req.user = user;
      await next(req, res);
    } catch (error) {
      res.status(401).json({
        success: false,
        msg: "Please authenticate using a valid token.",
      });
    }
  };

export default isAuth;
