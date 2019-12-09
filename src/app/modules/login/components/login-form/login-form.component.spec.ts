import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let sut;
  let authService;

  beforeEach(() => {
    authService = {
      login: jasmine.createSpy('login')
    };

    sut = new LoginFormComponent(authService);
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

