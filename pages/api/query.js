import connect from '@/lib/mongodb';
import Query from '@/models/Query';
import Joi from 'joi';

export default async function handler(req, res) {
  try {
    const schema = Joi.object().keys({
      name: Joi.string().min(4).required(),
      email: Joi.string().min(4).required(),
      message: Joi.string().min(15).required(),
      subject: Joi.string().min(4).required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
      res
        .status(400)
        .json({
          message: 'Something is missing from your side. please check again.',
        });
    await connect();
    await Query.create(req.body);
    res
      .status(200)
      .json({ message: 'Successfully added your query. Will reply soon' });
  } catch (err) {
    console.log(err, 'err');
    res.status(400).json({ message: 'Fetch Error.' });
  }
}
