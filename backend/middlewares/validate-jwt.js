import { response, request } from "express";
import jwt from "jsonwebtoken";

export const validateJWT = async (req = request, res = response, next) => {
  // const token = req.header("x-token");
  const cookies = req.cookies;
  const token = Object.values(cookies)[0];

  console.log(token);
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No token in the request",
    });
  }

  try {
    const { uid } = await jwt.verify(token, process.env.SECRET_JWT_TOKEN);
    console.log(uid);
    req.id = uid;
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Invalid token",
    });
  }
};
