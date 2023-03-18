// import { getSession } from "next-auth/client";
import { parseCookies } from "nookies";


const fetchuser = async (req, res, next) => {
    console.log(req.header);
    // res.status(200).json({ session });
}

export default fetchuser;
