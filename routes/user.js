import express from 'express';
import { login, register } from '../controllers/user.js';

const userRoute = express.Router();

userRoute.post('/signup', register);
userRoute.post('/signin', login);

export default userRoute;
