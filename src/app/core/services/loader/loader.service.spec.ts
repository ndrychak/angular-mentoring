import {LoaderService} from './loader.service';

describe('LoaderService', () => {
  let sut;

  beforeEach(() => {
    sut = new LoaderService();

    sut.isLoading$ = {
      next: jasmine.createSpy('next')
    };
  });

  describe('#startSpinner', () => {
    it('should publish true', () => {
      sut.startSpinner();

      expect(sut.isLoading$.next).toHaveBeenCalledWith(true);
    });
  });

  describe('#stopSpinner', () => {
    it('should publish false', () => {
      sut.stopSpinner();

      expect(sut.isLoading$.next).toHaveBeenCalledWith(false);
    });
  });
});

