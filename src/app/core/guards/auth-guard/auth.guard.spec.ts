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

      sut.canActivate().subscribe((res) => {
        expect(res).toEqual(true);
      });
    });

    it('should return false for not authenticated user', () => {
      authService.isAuthenticated.and.returnValue(false);

      sut.canActivate().subscribe((res) => {
        expect(res).toEqual(false);
      });
    });
  });
});

