import { UserSortAction, UserFilterAction } from './../../../app-redux/actions/user.action';
import { UserState } from './../../../app-redux/states/user.state';
import { Component, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/iuser';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  displayedColumns = ['name', 'active', 'createDate'];

  @ViewChild(MatSort) sort: MatSort;

  @Select(UserState.list) public dataSource: Observable<IUser[]>;

  constructor(private store: Store) {}

  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      return;
    }
    this.store.dispatch(new UserSortAction(sort));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.store.dispatch(new UserFilterAction(filterValue));
  }
}
