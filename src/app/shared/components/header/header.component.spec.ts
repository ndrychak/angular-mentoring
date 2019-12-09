import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let sut;
  let authService;

  beforeEach(() => {
    authService = {
      logout: jasmine.createSpy('logout'),
      getUserInfo: jasmine.createSpy('getUserInfo').and.callFake(() => {
        return {
          name: {
            first: 'name',
            last: 'last_name'
          }
        };
      })
    };

    sut = new HeaderComponent(authService);
  });

  describe('#renderUsernameInfo', () => {
    it('should set username for authenticated user', () => {
      sut.renderUsernameInfo(true);

      expect(sut.username).toEqual('name last_name');
    });
  });

  describe('#logout', () => {
    it('should call authService logout method', () => {
      sut.logout();

      expect(authService.logout).toHaveBeenCalled();
    });
  });
});

