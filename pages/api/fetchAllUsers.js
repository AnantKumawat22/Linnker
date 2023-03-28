import connect from "@/lib/mongodb";
import User from "@/models/User";
import { roles } from "@/constant";
import isAuth from "@/middleware/isAuth";

async function handler(req, res) {
  try {
    await connect();
    const users = await User.find({});
    res.status(200).json({ users, msg: "Fetch Successfully.", success: true });
  } catch (error) {
    res.status(400).json({ msg: "Fetch Error.", success: false });
  }
}

export default isAuth([roles.ADMIN], handler);
