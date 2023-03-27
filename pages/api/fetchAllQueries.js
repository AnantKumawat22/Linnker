import connect from "@/lib/mongodb";
import Query from "@/models/Query";
import { roles } from "@/constant";
import isAuth from "@/middleware/isAuth";

async function handler(req, res) {
  try {
    await connect();
    const queries = await Query.find({});
    res
      .status(200)
      .json({ queries, msg: "Fetch Successfully.", success: true });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ msg: "Fetch Error.", success: false });
  }
}

export default isAuth([roles.ADMIN], handler);
