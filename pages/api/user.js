import { roles } from "@/constant";
import connect from "@/lib/mongodb";
import isAuth from "@/middleware/isAuth";
import User from "@/models/User";

async function handler(req, res) {
  try {
    await connect();
    const id = req.user.id;
    const user = await User.findOne({ _id: id });
    res.status(200).json({ user, msg: "Fetch Successfully.", success: true });
  } catch (error) {
    console.log("handler error", error);
    res.status(400).json({ msg: "Fetch Error.", success: false });
  }
}

export default isAuth([roles.USER], handler);
