import connect from '@/lib/mongodb';
import Group from '@/models/Group';
import Joi from 'joi';
import { roles } from '@/constant';
import isAuth from '@/middleware/isAuth';

async function handler(req, res) {
  const { id } = req.body;
  try {
    const schema = Joi.object().keys({
      id: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
      res.status(400).json({
        msg: 'Something is missing from your side. please check again.',
        success: false,
      });
    await connect();
    const group = await Group.findOne({ _id: id });
    if (!group)
      res.status(400).json({
        msg: 'Something is missing from your side. please check again.',
        success: false,
      });

    await Group.findOneAndUpdate(
      { _id: group?._id },
      {
        $set: { isApproved: !group.isApproved },
      }
    );
    res.status(200).json({ msg: 'Change the group status.', success: true });
  } catch (error) {
    res.status(400).json({ msg: 'Internal Server Error', success: false });
  }
}

export default isAuth([roles.ADMIN], handler);
