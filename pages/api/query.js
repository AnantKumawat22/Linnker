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
      res.status(400).json({
        msg: "Something is missing from your side. please try again after some time.",
        success: false,
      });
    await connect();
    await Query.create(req.body);
    res
      .status(200)
      .json({
        msg: "Your query has been added successfully. We will reply soon.",
        success: true,
      });
  } catch (error) {
    res.status(400).json({ msg: 'Fetch Error.', success: false });
  }
}
