import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent {
  constructor(private route: Router) {}

  public viewNavegate() {
    this.route.navigate(['login']);
  }
}
