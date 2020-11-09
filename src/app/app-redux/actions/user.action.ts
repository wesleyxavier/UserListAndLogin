import { Sort } from '@angular/material/sort';
import { IUser } from 'src/app/core/pages/user/interfaces/iuser';

export class UserListAction {
  static readonly type = '[Base] User List';
  constructor(public list: IUser[]) {}
}

export class UserSortAction {
  static readonly type = '[Base] User Sort List';
  constructor(public sort: Sort) {}
}

export class UserFilterAction {
  static readonly type = '[Base] User filter';
  constructor(public filter: string) {}
}

export class UserCopyAction {
  static readonly type = '[Base] User Copy';
  constructor(public user: IUser) {}
}
