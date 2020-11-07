import { ListAutorizedGuard } from './guard/list.autorized.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule
  ],
  providers: [ListAutorizedGuard]
})
export class UserModule { }
