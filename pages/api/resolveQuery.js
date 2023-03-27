import connect from "@/lib/mongodb";
import Query from "@/models/Query";
import Joi from "joi";
import { roles } from "@/constant";
import isAuth from "@/middleware/isAuth";

async function handler(req, res) {
  const { id } = req.body;

  try {
    const schema = Joi.object().keys({
      id: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
      res.status(400).json({
        msg: "Something is missing from your side. please check again.",
      });
    await connect();
    const query = await Query.findOne({ _id: id });
    if (!query)
      res.status(400).json({
        msg: "Something is missing from your side. please check again.",
      });

    await Query.findOneAndUpdate(
      { _id: query?._id },
      {
        $set: { isResolved: !query.isResolved },
      }
    );
    res.status(200).json({ msg: "Change the query status." });
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ msg: "Internal Server Error" });
  }
}

export default isAuth([roles.ADMIN], handler);