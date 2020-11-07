import { AppShellCanDeactiveGuard } from './guard/app-shell-can-deactive.guard';
import { AppShellCanActiveGuard } from './guard/app-shell-can-active.guard';
import { Routes, Route } from '@angular/router';
import { AppShellComponent } from './app-shell.component';


export class ShellService {

  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: AppShellComponent,
      children: routes,
      canActivate: [AppShellCanActiveGuard],
      canDeactivate: [AppShellCanDeactiveGuard],
    };
  }
}
