import { Sort } from '@angular/material/sort';
import { IUser } from '../../core/pages/user/interfaces/iuser';

export interface IUserState {
  list: Array<IUser>;
  sort: Sort;
  filter: string;
}
