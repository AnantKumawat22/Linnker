import Group from "@/models/Group";
import connect from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    await connect();
    const groups = await Group.find({ isApproved: true });
    res.status(200).json({ groups, msg: "Fetch Successfully.", success: true });
  } catch (error) {
    console.log("handler error", error);
    res.status(400).json({ msg: "Fetch Error.", success: false });
  }
}
