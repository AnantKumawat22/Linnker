import mongoose from "mongoose";
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URL;

const connect = () => {
    mongoose.connect(MONGODB_URI, () => {
        console.log("DataBase Connection Successfull.");
    });
}

module.exports = connect;