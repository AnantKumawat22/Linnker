import mongoose from "mongoose";
import { Schema } from 'mongoose';

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    token: {
        type: String,
        required: true
    }
})

const Token = mongoose.models.token || mongoose.model("token", tokenSchema);

export default Token;