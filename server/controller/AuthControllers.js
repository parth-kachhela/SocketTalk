import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const MaxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (email, usreId) => {
  return jwt.sign({ email, userId: usreId }, process.env.JWT_KEW, {
    expiresIn: MaxAge,
  });
};

// SINGUP Route
export const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required." });
    }
    const user = await User.create({ email, password });
    res.cookie("jwt", createToken(email, User.id), {
      MaxAge,
      secure: true,
      sameSite: "None",
    });
    return res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        profileSetup: user.profileSetup,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error.message });
  }
};
