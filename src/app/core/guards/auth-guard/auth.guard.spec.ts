import {AuthGuard} from './auth.guard';

describe('AuthGuard', () => {
  let sut;
  let router;
  let store$;

  beforeEach(() => {
    store$ = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch')
    };

    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    sut = new AuthGuard(store$, router);

    sut.checkStoreAuthentication = jasmine.createSpy('checkStoreAuthentication').and.returnValue({
      pipe: () => {}
    });
  });

  describe('#canActivate', () => {
    it('should return true for authenticated user', () => {
      sut.canActivate();

      expect(sut.checkStoreAuthentication).toHaveBeenCalled();
    });
  });
});

