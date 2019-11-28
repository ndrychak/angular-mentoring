import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let sut;
  let authService;

  beforeEach(() => {
    authService = {
      logout: jasmine.createSpy('logout')
    };

    sut = new HeaderComponent(authService);
  });

  describe('#logout', () => {
    it('should call authService logout method', () => {
      sut.logout();

      expect(authService.logout).toHaveBeenCalled();
    });
  });

});

