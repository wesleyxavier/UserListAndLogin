import { Router } from '@angular/router';
import { LoginAction } from './../app-redux/actions/session.action';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ISession } from '../app-shell/interface/isession';
import { map, catchError } from 'rxjs/operators';
import { IUser } from '../core/pages/user/interfaces/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public viewError: string;
  public viewUsername: string;
  public viewPassword: string;
  viewLoading: boolean;

  constructor(
    private http: HttpClient,
    private route: Router,
    private store: Store
  ) {}

  /**
   * Init login
   * execute http
   */
  viewLogin() {
    if (!this.viewUsername || !this.viewPassword) {
      return;
    }

    this.viewError = null;
    this.viewLoading = true;
    setTimeout(() => {
      this.http
        .get<IUser[]>('assets/users.json')
        .pipe(
          map((users: IUser[]) => {
            const userExists = this.getUserByHttpLogin(users);
            if (!userExists) {
              this.viewError = 'User or Password inválid';
            } else {
              this.initSession({
                user: userExists,
                token: userExists.createDate.toString(),
                active: true,
              } as ISession);
            }
            this.viewLoading = false;
          }),
          catchError((error) => (this.viewError = error.message))
        )
        .subscribe();
    }, 2000);
  }

  /**
   * get user by http login json local
   * compare username
   * compare password
   */
  private getUserByHttpLogin(users: IUser[]) {
    return users.find(
      (user) =>
        user.name.toLowerCase() === this.viewUsername.toLowerCase() &&
        user.password.toLowerCase() === this.viewPassword.toLowerCase()
    );
  }

  /**
   * initial session
   * set session in store ngxs
   * On navegate route
   */
  private initSession(session: ISession) {
    if (session.active && session.token) {
      this.store
        .dispatch(new LoginAction(session))
        .subscribe(() => setTimeout(() => this.route.navigate(['user']), 1000));
    }
  }
}
