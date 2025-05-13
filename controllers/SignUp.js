import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const signUp = async (req, res) => {
  const { name, flatNumber, role, email, phone, password } = req.body;

   if (role === 'admin') {
      const existingAdmin = await User.findOne({ role: 'admin' });
      if (existingAdmin) {
        return res.json({ message: 'Admin already exists. Only one admin is allowed.', status: false });
      }
    }
  const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    if (password.length < 8) {
        return res.json({ message: 'Password must be at least 8 characters long', status: false});
    }
    
    const newUser = new User({
        name,
        flatNumber,
        role,
        email,
        phone,
        password
    });
    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully', status: true });
}