import mongoose from "mongoose";
import { Schema } from "mongoose";

const GroupSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
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

const Group = mongoose.models.groups || mongoose.model("groups", GroupSchema);

export default Group;
