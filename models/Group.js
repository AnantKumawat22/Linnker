import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
});

const Group = mongoose.model('groups', schema);

export default Group;
