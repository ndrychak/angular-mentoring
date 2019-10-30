import { async } from '@angular/core/testing';
import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  let pipe;

  beforeEach(async(() => {
    pipe = new TimePipe();
  }));

  it('should return hours only', () => {
    expect(pipe.transform(60)).toBe('1h');
  });

  it('should return minutes only', () => {
    expect(pipe.transform(10)).toBe('10 min');
  });

  it('should return hours and minutes', () => {
    expect(pipe.transform(70)).toBe('1h 10 min');
  });
});
