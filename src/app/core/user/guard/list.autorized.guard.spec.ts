import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SessionState } from 'src/app/app-redux/states/session.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListAutorizedGuard } from './list.autorized.guard';

describe('ListAutorizedGuard', () => {
  let guard: ListAutorizedGuard;
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxsModule.forRoot([SessionState])],
    });
    store = TestBed.inject(Store);
    guard = TestBed.inject(ListAutorizedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
