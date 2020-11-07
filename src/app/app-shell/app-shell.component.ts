import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public viewNavegate() {
    this.route.navigate(['login']);
  }
}
