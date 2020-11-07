import { AppShellCanDeactiveGuard } from './guard/app-shell-can-deactive.guard';
import { AppShellCanActiveGuard } from './guard/app-shell-can-active.guard';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AppShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [AppShellCanActiveGuard, AppShellCanDeactiveGuard]
})
export class AppShellModule { }

