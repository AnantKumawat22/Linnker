import { roles } from "@/constant";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: roles.USER,
    enum: Object.values(roles),
  },
});

const User = mongoose.models.users || mongoose.model("users", UserSchema);

export default User;
