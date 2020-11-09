import { IUser } from 'src/app/core/pages/user/interfaces/iuser';

export interface ISession {
  active?: boolean;
  token?: string;
  user?: IUser;
}
