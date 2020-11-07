import { IUser } from './../../core/user/interfaces/iuser';

export interface ISession {
  active?: boolean;
  token?: string;
  user?: IUser;
}
