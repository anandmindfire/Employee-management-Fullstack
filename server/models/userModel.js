import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
 username: { 
    type: String, 
    unique: true, 
    required: true 
    },
    email: { 
      type: String, 
      unique: true, 
      required: true 
      },
 password: {
     type: String,
      required: true 
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    loginCount: {
      type: Number,
      default: 0,
    },
    lastLogin: {
      type: Date,
    },
 });
 export default mongoose.model("user", userSchema);