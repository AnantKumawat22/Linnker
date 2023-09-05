import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const schema = new Schema({
  groupId: {
    type: Schema.Types.ObjectId,
    ref: 'groups',
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

const Report = mongoose.models.reports || mongoose.model('reports', schema);

export default Report;
