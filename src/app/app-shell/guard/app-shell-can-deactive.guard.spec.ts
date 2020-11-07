import { SessionState } from './../../app-redux/states/session.state';
import { TestBed } from '@angular/core/testing';
import { Store, NgxsModule } from '@ngxs/store';

import { AppShellCanDeactiveGuard } from './app-shell-can-deactive.guard';

describe('AppShellCanDeactiveGuard', () => {
  let guard: AppShellCanDeactiveGuard;
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([SessionState])
      ]
    });
    store = TestBed.inject(Store);
    guard = TestBed.inject(AppShellCanDeactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
