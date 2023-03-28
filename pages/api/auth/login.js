import connect from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../../models/User';
import initMiddleware from '../../../lib/init-middleware';
import validateMiddleware from '../../../lib/validate-middleware';
import { check } from 'express-validator';
require('dotenv').config();

// Validate input fields.
const validateBody = initMiddleware(
  validateMiddleware([
    check('email', 'Enter a valid email.').isEmail(),
    check(
      'password',
      'Password must have atleast 6 characters and atmost 40 characters.'
    ).isLength({ min: 6, max: 40 }),
  ])
);

// Login a User using: POST "/auth/login".
export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    // Connect to Database.
    connect();

    if (req.method == 'POST') {
      // Validating input fields.
      await validateBody(req, res);

      // Check whether the user with this email exists or not.
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          msg: "This email doesn't exists. Please try to login with correct credentials.",
          success: false,
        });
      }

      // Check Password is correct or not.
      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        return res.status(400).json({
          success: false,
          msg: 'Incorrect Password. Please try to login with correct credentials.',
        });
      }

      // Check User Verified or not [email verification].
      if (!user.verified) {
        return res.status(400).json({
          success: false,
          msg: 'Please Verify your email first. A verification link is already sent to your email account.',
        });
      }

      // Create Token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, process.env.JWT_SECRET);

      res.json({
        msg: 'Logged in Successfully.',
        success: true,
        authtoken,
        role: user.role,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Internal Server Error', success: false });
  }
}
