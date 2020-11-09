import { Sort } from '@angular/material/sort';
import {
  UserListAction,
  UserSortAction,
  UserFilterAction,
} from './../actions/user.action';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IUserState } from '../interfaces/IUserState';
import { compare } from '../../utils/compare';
import { IUser } from 'src/app/core/pages/user/interfaces/iuser';

@State({
  name: 'user',
  defaults: {
    list: new Array<IUser>(),
    sort: { direction: 'asc', active: 'name' } as any,
    filter: '',
  } as IUserState,
})
@Injectable()
export class UserState {
  constructor() {}

  /**
   * get users and sorting
   */
  @Selector()
  static list(session: IUserState) {
    return session.list
      .filter((user: IUser) => {
        if (!session.filter || session.filter === '') {
          return true;
        } else if (user.name.includes(session.filter)) {
          return true;
        }

        return false;
      })
      .sort((a: IUser, b: IUser) => {
        const isAsc = session.sort.direction === 'asc';
        switch (session.sort.active) {
          case 'name':
            return compare(a.name, b.name, isAsc);
          case 'date':
            return compare(a.createDate, b.createDate, isAsc);
          default:
            return 0;
        }
      });
  }

  /**
   * Set list user
   */
  @Action(UserListAction)
  loginAction(ctx: StateContext<IUserState>, payload: { list: IUser[] }) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      list: payload.list,
    });
  }

  /**
   * Set user sort list
   */
  @Action(UserSortAction)
  UserSortAction(ctx: StateContext<IUserState>, payload: { sort: Sort }) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      sort: payload.sort,
    });
  }

  /**
   * Set user filter
   */
  @Action(UserFilterAction)
  UserFilterAction(ctx: StateContext<IUserState>, payload: { filter: string }) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      filter: payload.filter,
    });
  }
}
