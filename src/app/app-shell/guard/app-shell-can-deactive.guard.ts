import { LogoutAction } from './../../app-redux/actions/session.action';
import { finalize, map } from 'rxjs/operators';
import { SessionState } from './../../app-redux/states/session.state';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppShellCanDeactiveGuard implements CanDeactivate<any> {

  @Select(SessionState.isSessionActive) isSessionActive: Observable<boolean>;

  constructor(private store: Store) { }

  canDeactivate(
    component: any,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.isSessionActive.pipe(finalize(() => {
      this.store.dispatch(new LogoutAction());
    }));
  }
}
