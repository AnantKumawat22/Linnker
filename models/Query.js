import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  isResolved: {
    type: Boolean,
    default: false,
  },
});

const Query = mongoose.models.queries || mongoose.model('queries', schema);

export default Query;
