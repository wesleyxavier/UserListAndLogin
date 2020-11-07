import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  displayedColumns = [];

  public dataSource: Observable<IUser[]>;

  constructor() {}

  ngOnInit(): void {}
}
