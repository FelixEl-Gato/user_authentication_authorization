import jwt from "jsonwebtoken";

export const generateJWT = async (uid = "") => {
  try {
    const payload = { uid };

    const token = jwt.sign(payload, process.env.SECRET_JWT_TOKEN, {
      expiresIn: "1h",
    });

    return token;
  } catch (error) {
    console.log(error);
    return "Error generating token";
  }
};
