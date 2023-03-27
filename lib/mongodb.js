import mongoose from "mongoose";
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URL;

const connect = async () => {
  let dbconnect = await mongoose.connect(MONGODB_URI);
  if (dbconnect) {
    console.log("Database Connection Successfull.");
  }
};

export default connect;
