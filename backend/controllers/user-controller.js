import User from "../models/user.js";

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};