import { UserListAction } from './../../../../app-redux/actions/user.action';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class ListAutorizedGuard implements CanActivate {
  constructor(private http: HttpClient, private store: Store) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.http.get<IUser[]>('assets/users.json').pipe(
      map((users: IUser[]) => this.setList(users)),
      catchError(async (error) => error)
    );
  }

  private setList(users: IUser[]) {
    this.store.dispatch(new UserListAction(users));
    return !!users;
  }
}
