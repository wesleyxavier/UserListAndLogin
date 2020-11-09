import { PaginationScrollDirective } from './pagination-scroll.directive';

describe('PaginationScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new PaginationScrollDirective({
      nativeElement: document,
    }, null);
    expect(directive).toBeTruthy();
  });
});
