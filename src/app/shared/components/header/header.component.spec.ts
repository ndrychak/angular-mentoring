import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let sut;
  let cd;
  let authService;

  beforeEach(() => {
    authService = {
      logout: jasmine.createSpy('logout'),
      getUserInfo: jasmine.createSpy('getUserInfo').and.callFake(() => {
        return {
          firstName: 'name',
          lastName: 'last_name'
        };
      })
    };

    cd = {
      markForCheck: jasmine.createSpy('markForCheck')
    };

    sut = new HeaderComponent(authService, cd);
  });

  describe('#renderUsernameInfo', () => {
    it('should set username for authenticated user', () => {
      sut.isAuthenticated = true;
      sut.setUsername();

      expect(sut.username).toEqual('name last_name');
    });

    it('should set username to empty string for anonymous user', () => {
      sut.isAuthenticated = false;
      sut.setUsername();

      expect(sut.username).toEqual('');
    });
  });

  describe('#logout', () => {
    it('should call authService logout method', () => {
      sut.logout();

      expect(authService.logout).toHaveBeenCalled();
    });
  });
});

