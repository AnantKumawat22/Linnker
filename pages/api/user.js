import connect from '@/lib/mongodb';
import isAuth from '@/middleware/isAuth';
import User from '@/models/User';

export default async function handler(req, res) {
  try {
    isAuth(req, res);
    await connect();
    const id = req.user.id;
    const user = await User.findOne({ _id: id });
    res.status(200).json({ user, message: 'Fetch Successfully.' });
  } catch (err) {
    console.log(err, 'handler error');
    res.status(400).json({ message: 'Fetch Error.' });
  }
}
