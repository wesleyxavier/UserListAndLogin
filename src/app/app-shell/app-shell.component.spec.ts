import { AppShellCanActiveGuard } from './guard/app-shell-can-active.guard';
import { AppShellCanDeactiveGuard } from './guard/app-shell-can-deactive.guard';
import { SessionState } from './../app-redux/states/session.state';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppShellComponent } from './app-shell.component';
import { NgxsModule, Store } from '@ngxs/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

describe('AppShellComponent', () => {
  let component: AppShellComponent;
  let fixture: ComponentFixture<AppShellComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppShellComponent ],
      imports: [
        NgxsModule.forRoot([SessionState]),
        RouterTestingModule,
        HttpClientTestingModule,
        MatToolbarModule,
        MatIconModule
      ],
      providers: [AppShellCanActiveGuard, AppShellCanDeactiveGuard]
    })
    .compileComponents();
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
