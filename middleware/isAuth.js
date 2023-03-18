import jwt from "jsonwebtoken";
require('dotenv').config();

const isAuth = async (req, res) => {

    // Get the user from the jwt token and add id to req object.
    const auth = req.headers;
    const token = auth.authentication;
    if (!token) {
        res.status(401).json({ success: false, mssg: "Please authenticate using a valid token." });
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        // console.log("req", data.user.id);
    } catch (error) {
        res.status(401).json({ success: false, mssg: "Please authenticate using a valid token." });
    }
}

export default isAuth;
