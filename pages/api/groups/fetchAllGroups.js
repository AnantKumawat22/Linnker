import Group from '@/models/Group';

export default async function handler(req, res) {
  const groups = await Group.find({});
  res.status(200).json({ groups, message: 'Fetch Successfully.' });
}
