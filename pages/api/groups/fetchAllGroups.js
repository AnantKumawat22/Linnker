import Group from '@/models/Group';
import connect from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    await connect();
    const groups = await Group.find({isApproved: true});
    res.status(200).json({ groups, message: 'Fetch Successfully.' });
  } catch (err) {
    console.log(err, 'handler error');
    res.status(400).json({ message: 'Fetch Error.' });
  }
}
