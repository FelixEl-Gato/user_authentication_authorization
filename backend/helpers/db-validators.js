import User from "../models/user.js";

export const emailValidation = async (email = "") => {
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    throw new Error(`Email ${email} already exists`);
  }
};
