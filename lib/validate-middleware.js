const { validationResult } = require("express-validator");

export default function validateMiddleware(validations) {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({ msg: errors.array()[0].msg, success: false });
  };
}
