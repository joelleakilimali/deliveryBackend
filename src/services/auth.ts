import { CreateUserPayload, LoginUserPayload } from '../interfaces/auth';
import { Response } from 'express';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
  async register(payload: CreateUserPayload, res: Response) {
    const existingUser = await User.findOne({ email: payload.email }).exec();

    if (existingUser) {
      console.log('this email address exist ');
      return res.status(400).json({ message: 'Email address already used' });
    }

    try {
      const user = await User.create({
        ...payload,
        password: bcrypt.hashSync(payload.password, 10),
      });

      console.log(user);

      res.status(200).json({
        message: 'User created ',
        newUser: {
          email: user.email,
          _id: user._id,
        },
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async login(payload: LoginUserPayload, res: Response) {
    console.log('login payload', payload);
    const user = await User.findOne({ email: payload.email }).exec();
    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const passwordValid = await bcrypt.compare(payload.password, user.password);

    if (!passwordValid) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = jwt.sign(
      {
        email: user.email,
        _id: user._id,
      },
      process.env.TOKEN as string,
      {
        expiresIn: '1h',
      },
    );

    return res
      .status(200)
      .json({ message: 'login successfuly', token: token, user });
  }
}

export const authService = new AuthService();
