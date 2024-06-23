import express from 'express';
import { validator } from '../validator';
import { createUserSchema, loginUserSchema } from '../validator/schemas/auth';
import { authService } from '../services/auth';

export const authRouter = express.Router();

authRouter.post('/register', validator.body(createUserSchema), (req, res) => {
  authService.register(req.body, res);
});

authRouter.post('/login', validator.body(loginUserSchema), (req, res, next) => {
  authService.login(req.body, res);
});
