import { DateCustomPipe } from './date.pipe';

describe('Date.Pipe.TsPipe', () => {
  it('create an instance', () => {
    const pipe = new DateCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
