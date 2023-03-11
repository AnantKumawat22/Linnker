import connect from '../../lib/mongodb';

// SignUp Backend.
// POST :- /api/signup

export default function handler(req, res) {
    connect();

    res.status(200).json({ data : req.body })
}