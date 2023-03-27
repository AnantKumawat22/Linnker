import connect from "@/lib/mongodb";
import Group from "@/models/Group";

export default async function handler(req, res) {
  try {
    // Connect Database.
    await connect();
    const { groupId, isApproved } = req.body;

    // Find the group
    await Group.updateOne({ _id: groupId }, { isApproved });

    res.status(200).json({
      msg: "Fetched Successfully.",
      success: true,
    });
  } catch (error) {
    console.log("handler error", error);
    res.status(400).json({ msg: "User Name Fetch Error", success: false });
  }
}
