import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    image: String,
    expires: String,
    access_token: String,
    provider: String,
    id_token: String,
    user_status: { type: String, default: 'unpaid' },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
