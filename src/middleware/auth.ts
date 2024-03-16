import jwt from 'jsonwebtoken';
import { CONFIG } from '../config';
import { RequestHandler } from 'express';

export const authMiddleware: RequestHandler<{ user: any }> = (
  req,
  res,
  next,
) => {
  // Get the token from Header
  const token = req.header('authorization')?.split(' ')[1];
  console.log(token);
  // check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token,authorization denied' });
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, CONFIG.JWT_SECRET) as {
      user: any;
      id: string;
    };

    console.log('Testing auth...');

    req.user = decoded.user;
    console.log(req.user);

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
