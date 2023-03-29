import connect from '@/lib/mongodb';
import Group from '@/models/Group';
import User from '@/models/User';
import isAuth from '@/middleware/isAuth';
import { roles } from '@/constant';

async function handler(req, res) {
  try {
    // Connect Database.
    await connect();
    const { tokenid } = req.headers;
    // Find the group
    const group = await Group.findOne({ _id: tokenid });
    const getuser = group.user;

    const user = await User.findOne({ _id: getuser });

    res.status(200).json({
      user: user.name,
      msg: 'User Name Fetched Successfully.',
      success: true,
    });
  } catch (error) {
    res.status(400).json({ msg: 'User Name Fetch Error', success: false });
  }
}

export default isAuth([roles.USER, roles.ADMIN], handler);
