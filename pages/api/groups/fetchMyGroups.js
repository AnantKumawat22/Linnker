import isAuth from '@/middleware/isAuth';
import Group from '@/models/Group';
import connect from '@/lib/mongodb';

export default async function handler(req, res) {
  console.log('handler start');
  isAuth(req, res);
  connect();
  const user = req.user;
  try {
    const groups = await Group.find({ user: user.id });
    res.status(200).json({ groups, message: 'Fetch Successfully.' });
  } catch (err) {
    console.log(err, 'handler error');
    res.status(400).json({ message: 'Fetch Error.' });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

// Apply the middleware to the API route
