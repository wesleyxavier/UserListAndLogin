import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { SessionState } from 'src/app/app-redux/states/session.state';

@Injectable({
  providedIn: 'root'
})
export class AppShellCanActiveGuard implements CanActivate {

  @Select(SessionState.isSessionActive) isSessionActive: Observable<boolean>;

  constructor(private route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.isSessionActive.pipe(map(session => {
      if (!session) {
        this.route.navigate(['login']);
      }
      return session;
    }));
  }
}
