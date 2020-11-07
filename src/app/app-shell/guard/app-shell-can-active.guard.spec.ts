import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { AppShellCanActiveGuard } from './app-shell-can-active.guard';

describe('AppShellCanActiveGuard', () => {
  let guard: AppShellCanActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AppShellCanActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
