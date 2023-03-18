import fetchuser from "@/middleware/fetchuser";

export default function handler(req, res) {
  const { name, description, link, tags } = req.body;
  if (req.method == "POST") {
    fetchuser(req, res);
    res.status(200).json({ req: req.header });
  }
}
