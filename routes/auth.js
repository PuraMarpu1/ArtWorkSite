const { Router } = require("express");
const router = Router();

const { check, validationResult } = require("express-validator");
const { login } = require("../controllers/auth");

const validateInput = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

router.post(
  "/login",
  [
    check("email", "email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateInput,
  ],
  login
);
module.exports = router;
