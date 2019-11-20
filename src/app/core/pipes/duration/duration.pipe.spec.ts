import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let sut;

  beforeEach(() => {
    sut = new DurationPipe();
  });

  describe('#transform', () => {
    it('should return hours only', () => {
      expect(sut.transform(60)).toBe('1h');
    });

    it('should return minutes only', () => {
      expect(sut.transform(10)).toBe('10 min');
    });

    it('should return hours and minutes', () => {
      expect(sut.transform(70)).toBe('1h 10 min');
    });
  });
});
