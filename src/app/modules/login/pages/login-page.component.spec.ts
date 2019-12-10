import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let sut;
  let authService;

  beforeEach(() => {
    authService = {
      login: jasmine.createSpy('login')
    };

    sut = new LoginPageComponent(authService);
  });

  describe('#loginUser', () => {
    it('should call login method of authService', () => {
      sut.loginUser({
        value: {
          email: 'test@test.com',
          password: 'pass'
        }
      });

      expect(authService.login).toHaveBeenCalledWith({
        email: 'test@test.com',
        password: 'pass'
      });
    });
  });
});

