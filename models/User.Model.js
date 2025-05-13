import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  flatNumber: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['resident', 'admin', 'security'],
    default: 'resident'
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: String,
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const User = mongoose.model('User', userSchema);
