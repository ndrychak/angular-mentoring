import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let sut;
  let translateService;

  beforeEach(() => {
    translateService = {
      get: jasmine.createSpy('get'),
      onLangChange: jasmine.createSpy('onLangChange'),
      translations: {
        en: {
          DURATION: {
            HOUR: 'h',
            MIN: 'min'
          }
        },
        ru: {}
      }
    };

    sut = new DurationPipe(translateService);
  });

  describe('#transform', () => {
    it('should return hours only', () => {
      expect(sut.transform(60, 'en')).toBe('1h');
    });

    it('should return minutes only', () => {
      expect(sut.transform(10, 'en')).toBe('10min');
    });

    it('should return hours and minutes', () => {
      expect(sut.transform(70, 'en')).toBe('1h 10min');
    });
  });
});
