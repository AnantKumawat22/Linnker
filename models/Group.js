import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const GroupSchema = new Schema({
  userId: {
    type: String,
    require: true,
  },
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

const Group = mongoose.models.groups || mongoose.model('groups', GroupSchema);

export default Group;
