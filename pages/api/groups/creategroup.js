import isAuth from '@/middleware/isAuth';
import Group from '@/models/Group';
import connect from '../../../lib/mongodb';
import initMiddleware from '../../../lib/init-middleware';
import validateMiddleware from '../../../lib/validate-middleware';
import { check } from 'express-validator';
import { roles } from '@/constant';

// Validate input fields.
const validateBody = initMiddleware(
  validateMiddleware([
    check(
      'name',
      'Group Name must have atleast 3 characters and atmost 30 characters.'
    ).isLength({ min: 3, max: 30 }),
    check(
      'description',
      'Group Description must have atleast 3 characters and atmost 300 characters.'
    ).isLength({ min: 3, max: 300 }),
    check('link', 'Enter a Valid Group Link').isURL(),
  ])
);

// Create a Group using: POST "/api/groups/creategroup".
async function handler(req, res) {
  const { name, description, link, tags } = req.body;

  if (req.method == 'POST') {
    try {
      // Connect to Database.
      connect();
      // Validating input fields.
      await validateBody(req, res);

      // Create and Save New Note
      const creategroup = await Group.create({
        name,
        description,
        tags,
        link,
        user: req.user.id,
      });

      res.status(200).json({
        success: true,
        msg: 'New Group Created Successfully.',
        group: creategroup,
      });
    } catch (error) {
      res.status(500).json({ msg: 'Internal sever Error.', success: false });
    }
  }
}

export default isAuth([roles.USER, roles.ADMIN], handler);
