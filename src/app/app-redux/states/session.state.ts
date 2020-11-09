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

  /**
   * validate is session active
   * active and exists token
   */
  @Selector()
  static isSessionActive(session: ISession) {
    return !!(session.active && session.token);
  }

  /**
   * Set session
   */
  @Action(LoginAction)
  loginAction(ctx: StateContext<ISession>, payload: { session: ISession }) {
    ctx.setState(payload.session);
  }

  /**
   * Clear session ngxs
   */
  @Action(LogoutAction)
  logoutAction(ctx: StateContext<ISession>) {
    ctx.setState({});
  }
}
