import { Schema, model } from "mongoose";

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 6,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
});

const User = model("User", UserSchema);

export default User;