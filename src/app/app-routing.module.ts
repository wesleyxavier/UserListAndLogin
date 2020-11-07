import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { ShellService } from './app-shell/app-shell.service';
import { applicationRoutes } from './utils/app-routing';

const routes: Routes = [
  ShellService.childRoutes(applicationRoutes),
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
