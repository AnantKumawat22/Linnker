import { roles } from '@/constant';
import connect from '@/lib/mongodb';
import isAuth from '@/middleware/isAuth';
import User from '@/models/User';

async function handler(req, res) {
  try {
    await connect();
    const users = await User.find({});
    res.status(200).json({ users, message: 'Fetch Successfully.' });
  } catch (err) {
    console.log(err, 'handler error');
    res.status(400).json({ message: 'Fetch Error.' });
  }
}

export default handler;
