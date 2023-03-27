import isAuth from "@/middleware/isAuth";
import Group from "@/models/Group";
import connect from "@/lib/mongodb";

// Delete an existing Group using: DELETE "/api/groups/deletemygroup/:id".
async function handler(req, res) {
  const { id } = req.query;

  try {
    // Connect to Database.
    connect();

    // Find the Group to be delete.
    let group = await Group.findById(id);
    if (!group) {
      return res.status(400).json({ success: false, msg: "Group not Found." });
    }

    // Check if the group user want to delete, is his/her group or user want to delete any other user's group.
    if (group.user.toString() !== req.user.id) {
      res.status(401).json({
        success: false,
        msg: "You are not Allowed to delete this Group.",
      });
    }

    // Find and Delete the Note.
    group = await Group.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      msg: "Group has been deleted successfully.",
    });
  } catch (error) {
    res.status(500).send("Internal sever Error.");
  }
}

export default isAuth([roles.USER], handler);
