import { ButtonCopyModule } from './../../components/button.copy.component/button.copy.module';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { UserState } from './../../../app-redux/states/user.state';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { UserComponent } from './user.component';
import { NgxsModule, Store } from '@ngxs/store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [
        MatTableModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        ButtonCopyModule,
        NgxsModule.forRoot([UserState])
      ],
    }).compileComponents();
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create user component', () => {
    expect(component).toBeTruthy();
  });
});
