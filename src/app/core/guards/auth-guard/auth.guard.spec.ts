import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let sut;
  let authService;
  let router;

  beforeEach(() => {
    authService = {
      isAuthenticated: jasmine.createSpy('isAuthenticated')
    };

    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    sut = new AuthGuard(authService, router);
  });

  describe('#canActivate', () => {
    it('should return true for authenticated user', () => {
      authService.isAuthenticated.and.returnValue(true);

      expect(sut.canActivate()).toEqual(true);
    });

    it('should return false for not authenticated user', () => {
      authService.isAuthenticated.and.returnValue(false);

      expect(sut.canActivate()).toEqual(false);
    });
  });
});

