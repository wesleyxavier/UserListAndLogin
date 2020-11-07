import { LogoutAction } from './../actions/session.action';
import { ISession } from '../../app-shell/interface/isession';
import { LoginAction } from '../actions/session.action';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

@State({
  name: 'session',
  defaults: {} as ISession
})
@Injectable()
export class SessionState {

  constructor() { }

  @Selector()
  static isSessionActive(session: ISession) {
    return !!(session.active && session.token);
  }

  @Action(LoginAction)
  loginAction(ctx: StateContext<ISession>, payload: { session: ISession }) {
    ctx.setState(payload.session);
  }

  @Action(LogoutAction)
  logoutAction(ctx: StateContext<ISession>) {
    ctx.setState({});
  }
}
