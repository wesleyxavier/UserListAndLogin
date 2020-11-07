import { IUser } from './../core/user/interfaces/iuser';
import { Router } from '@angular/router';
import { LoginAction } from './../app-redux/actions/session.action';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ISession } from '../app-shell/interface/isession';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public viewError: string;
  public viewUsername: string;
  public viewPassword: string;

  constructor(
    private http: HttpClient,
    private route: Router,
    private store: Store
  ) {}

  /**
   * Inicia login
   */
  viewLogin() {
    if (!this.viewUsername || !this.viewPassword) { return; }

    this.viewError = null;

    this.http
      .get<IUser[]>('assets/users.json')
      .pipe(
        map((users: IUser[]) => {
          const userExists = this.getUser(users);
          if (!userExists) {
            this.viewError = 'User or Password inválid';
          } else {
            this.initSession({
              user: userExists,
              token: userExists.createDate.toString(),
              active: true,
            } as ISession);
          }
        }),
        catchError((error) => (this.viewError = error.message))
      )
      .subscribe();
  }

  private getUser(users: IUser[]) {
    return users.find(
      (user) =>
        user.name.toLowerCase() === this.viewUsername.toLowerCase() &&
        user.password.toLowerCase() === this.viewPassword.toLowerCase()
    );
  }

  private initSession(session: ISession) {
    if (session.active && session.token) {
      this.store
        .dispatch(new LoginAction(session))
        .subscribe(() => setTimeout(() => this.route.navigate(['user']), 1000));
    }
  }
}
