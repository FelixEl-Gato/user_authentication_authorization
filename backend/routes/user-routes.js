import { Router } from "express";
import { check } from "express-validator";
import { login, signup } from "../controllers/user-controller.js";
import { emailValidation } from "../helpers/db-validators.js";
import { validateFields } from "../middlewares/validate-fields.js";

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "Hello World!" });
});

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
    check("password").not().isEmpty(),
    check("email").custom(emailValidation),
    validateFields,
  ],
  signup
);

router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
    check("password").not().isEmpty(),
    check("email").custom(emailValidation),
  ],
  login
);

export default router;
