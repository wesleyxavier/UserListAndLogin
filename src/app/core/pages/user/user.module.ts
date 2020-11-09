import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActiveCheckboxModule } from './../../components/active.checkbox.component.ts/active.checkbox.module';
import { DatePipeModule } from './../../pipes/DatePipe.module';
import { PaginationScrollDirective } from './../../directives/paginationScroll/pagination-scroll.directive';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from 'src/app/app-redux/states/user.state';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListAutorizedGuard } from './guard/list.autorized.guard';
@NgModule({
  declarations: [UserComponent, PaginationScrollDirective],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    NgxsModule.forFeature([UserState]),
    DatePipeModule,
    ActiveCheckboxModule,
    MatCheckboxModule
  ],
  providers: [ListAutorizedGuard],
})
export class UserModule {}
