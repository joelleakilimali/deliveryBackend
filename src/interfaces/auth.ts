import { IUser } from './user';

export type CreateUserPayload = Omit<IUser, '_id' | 'lastPasswordChangedAt'>;
export type LoginUserPayload = Pick<IUser, 'email' | 'password'>;
