import { ISession } from './../../app-shell/interface/isession';
export class LoginAction {
  static readonly type = '[Base] Login';
  constructor(public session: ISession) { }
}

export class LogoutAction {
  static readonly type = '[Base] Logout';
  constructor() { }
}
