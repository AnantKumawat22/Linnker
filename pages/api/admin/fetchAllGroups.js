import Group from '@/models/Group';
import connect from '@/lib/mongodb';
import isAuth from '@/middleware/isAuth';
import { roles } from '@/constant';

async function handler(req, res) {
  try {
    await connect();
    const groups = await Group.find({});
    res.status(200).json({ groups, msg: 'Fetch Successfully.', success: true });
  } catch (error) {
    res.status(400).json({ msg: 'Fetch Error.', success: false });
  }
}

export default isAuth([roles.ADMIN], handler);

