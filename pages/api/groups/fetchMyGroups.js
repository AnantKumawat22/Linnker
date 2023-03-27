import isAuth from "@/middleware/isAuth";
import Group from "@/models/Group";
import connect from "@/lib/mongodb";
import { roles } from "@/constant";

async function handler(req, res) {
  connect();
  const user = req.user;
  try {
    const groups = await Group.find({ user: user.id });
    res.status(200).json({ groups, msg: "Fetch Successfully.", success: true });
  } catch (error) {
    console.log("handler error", error);
    res.status(400).json({ msg: "Fetch Error.", success: false });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

export default isAuth([roles.USER], handler);
// Apply the middleware to the API route
