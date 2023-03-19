import User from "@/models/User";
import Token from "@/models/Token";

export default async function handler(req, res) {
  const { id, token } = req.query;

  try {
    let user = await User.findOne({ _id: id });
    if (!user) return res.send("Invalid link");

    let tokencheck = await Token.findOne({ user: user._id, token });
    if (!tokencheck) return res.send("Invalid link");

    await User.updateOne({ _id: user._id, $set: {verified: true} });
    await Token.findByIdAndRemove(tokencheck._id);

    res.send("Email verified successfully.");
  } catch (error) {
    res.send("An Error Occured");
  }
}
