import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgxsModule, Store } from '@ngxs/store';
import { SessionState } from '../app-redux/states/session.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, NgxsModule.forRoot([SessionState])]
    })
      .compileComponents();
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
