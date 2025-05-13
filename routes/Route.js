import express, { Router } from 'express';
import { signUp } from '../controllers/SignUp.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API is running...');
});
router.post("api/signup",signUp);

export {router};