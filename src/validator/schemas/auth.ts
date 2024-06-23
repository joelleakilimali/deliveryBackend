import Joi from 'joi';
import { CreateUserPayload, LoginUserPayload } from '../../interfaces/auth';

export const createUserSchema = Joi.object<CreateUserPayload>({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  password: Joi.string().min(4).required(),
});

export const loginUserSchema = Joi.object<LoginUserPayload>({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
});
