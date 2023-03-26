import { roles } from '@/constant';
import connect from '@/lib/mongodb';
import isAuth from '@/middleware/isAuth';
import Query from '@/models/Query';

async function handler(req, res) {
  try {
    await connect();
    const queries = await Query.find({});
    res.status(200).json({ queries, message: 'Fetch Successfully.' });
  } catch (err) {
    console.log(err, 'handler error');
    res.status(400).json({ message: 'Fetch Error.' });
  }
}

export default handler;
