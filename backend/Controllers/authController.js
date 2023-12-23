import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    let user = null;

    if (role == "patient") {
      user = await User.findOne({ email });
    } else if (role == "doctor") {
      user = await Doctor.findOne({ email });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role == "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        role,
        photo,
        gender,
      });
    }

    if (role == "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        role,
        photo,
        gender,
      });
    }

    await user.save();

    res
      .status(200)
      .json({ success: true, message: "User successfully created" });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }
  } catch (error) {}
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = null;

    const patient = await User.findOne({ email });
    const doctor = await User.findOne({ email });

    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res
        .status(404)
        .json({ status: false, message: "Invalid credentials" });
    }

    const token = generateToken(user);

    const { password, role, appointments, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: "Successfully login",
      token,
      data: { ...rest },
      role,
    });
  } catch (error) {}
};
