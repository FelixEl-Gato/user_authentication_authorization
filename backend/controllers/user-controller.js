import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { generateJWT } from "../helpers/generate_jwt.js";

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User created successfully", user: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    const { password: _password, ...user } = existingUser;

    const isPasswordCorrect = await bcrypt.compare(password, _password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = await generateJWT(user._id);

    res.cookie(String(user._id), token, {
      path: "/",
      expires: new Date(Date.now() + 10000 * 30),
      httpOnly: true,
      sameSite: "lax",
    });

    res.status(200).json({
      message: "User logged in successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUser = async (req, res, next) => {
  const { id } = req;

  try {
    const user = await User.findById(id, "-password -__v");

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
